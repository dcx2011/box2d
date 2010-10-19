/*
* Copyright (c) 2006-2007 Erin Catto http:
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked, and must not be
* misrepresented the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/

goog.provide('box2d.MouseJoint');

goog.require('box2d.Joint');
goog.require('box2d.MouseJointDef');
// p = attached point, m = mouse point
// C = p - m
// Cdot = v
//      = v + cross(w, r)
// J = [I r_skew]
// Identity used:
// w k % (rx i + ry j) = w * (-ry i + rx j)
/**
 @constructor
 @extends {box2d.Joint}
 @param {!box2d.MouseJointDef} def
 */
box2d.MouseJoint = function(def) {
  // The constructor for b2Joint
  // initialize instance variables for references
  this.m_node1 = new box2d.JointNode();
  this.m_node2 = new box2d.JointNode();
  //
  this.m_type = def.type;
  this.m_prev = null;
  this.m_next = null;
  this.m_body1 = def.body1;
  this.m_body2 = def.body2;
  this.m_collideConnected = def.getCollideConnected();
  this.m_islandFlag = false;
  this.m_userData = def.userData;
  //
  // initialize instance variables for references
  this.K = new box2d.Mat22();
  this.K1 = new box2d.Mat22();
  this.K2 = new box2d.Mat22();
  this.m_localAnchor = new box2d.Vec2();
  this.m_target = new box2d.Vec2();
  this.m_impulse = new box2d.Vec2();
  this.m_ptpMass = new box2d.Mat22();
  this.m_C = new box2d.Vec2();
  //
  //super(def);
  this.m_target.SetV(def.target);
  //this.m_localAnchor = box2d.Math.b2MulTMV(this.m_body2.m_R, box2d.Math.SubtractVV( this.m_target, this.m_body2.m_position ) );
  var tX = this.m_target.x - this.m_body2.m_position.x;
  var tY = this.m_target.y - this.m_body2.m_position.y;
  this.m_localAnchor.x = (tX * this.m_body2.m_R.col1.x + tY * this.m_body2.m_R.col1.y);
  this.m_localAnchor.y = (tX * this.m_body2.m_R.col2.x + tY * this.m_body2.m_R.col2.y);

  this.m_maxForce = def.maxForce;
  this.m_impulse.SetZero();

  var mass = this.m_body2.m_mass;

  // Frequency
  var omega = 2.0 * box2d.Settings.b2_pi * def.frequencyHz;

  // Damping coefficient
  var d = 2.0 * mass * def.dampingRatio * omega;

  // Spring stiffness
  var k = mass * omega * omega;

  // magic formulas
  this.m_gamma = 1.0 / (d + def.timeStep * k);
  this.m_beta = def.timeStep * k / (d + def.timeStep * k);
};
goog.inherits(box2d.MouseJoint, box2d.Joint);

box2d.MouseJoint.prototype.GetAnchor1 = function() {
  return this.m_target;
};
box2d.MouseJoint.prototype.GetAnchor2 = function() {
  var tVec = box2d.Math.b2MulMV(this.m_body2.m_R, this.m_localAnchor);
  tVec.add(this.m_body2.m_position);
  return tVec;
};
box2d.MouseJoint.prototype.GetReactionForce = function(invTimeStep) {
  //box2d.Vec2 F = invTimeStep * this.m_impulse;
  var f = new box2d.Vec2();
  f.SetV(this.m_impulse);
  f.scale(invTimeStep);
  return f;
};
box2d.MouseJoint.prototype.GetReactionTorque = function(invTimeStep) {
  //NOT_USED(invTimeStep);
  return 0.0;
};
box2d.MouseJoint.prototype.SetTarget = function(target) {
  this.m_body2.WakeUp();
  this.m_target = target;
};
box2d.MouseJoint.prototype. //--------------- Internals Below -------------------
// Presolve vars
PrepareVelocitySolver = function() {
  var b = this.m_body2;

  var tMat;

  // Compute the effective mass matrix.
  //box2d.Vec2 r = b2Mul(b.m_R, this.m_localAnchor);
  tMat = b.m_R;
  var rX = tMat.col1.x * this.m_localAnchor.x + tMat.col2.x * this.m_localAnchor.y;
  var rY = tMat.col1.y * this.m_localAnchor.x + tMat.col2.y * this.m_localAnchor.y;

  // this.K    = [(1/m1 + 1/m2) * eye(2) - skew(r1) * invI1 * skew(r1) - skew(r2) * invI2 * skew(r2)]
  //      = [1/m1+1/m2     0    ] + invI1 * [r1.y*r1.y -r1.x*r1.y] + invI2 * [r1.y*r1.y -r1.x*r1.y]
  //        [    0     1/m1+1/m2]           [-r1.x*r1.y r1.x*r1.x]           [-r1.x*r1.y r1.x*r1.x]
  var invMass = b.m_invMass;
  var invI = b.m_invI;

  //b2Mat22 this.K1;
  this.K1.col1.x = invMass;
  this.K1.col2.x = 0.0;
  this.K1.col1.y = 0.0;
  this.K1.col2.y = invMass;

  //b2Mat22 this.K2;
  this.K2.col1.x = invI * rY * rY;
  this.K2.col2.x = -invI * rX * rY;
  this.K2.col1.y = -invI * rX * rY;
  this.K2.col2.y = invI * rX * rX;

  //b2Mat22 this.K = this.K1 + this.K2;
  this.K.SetM(this.K1);
  this.K.AddM(this.K2);
  this.K.col1.x += this.m_gamma;
  this.K.col2.y += this.m_gamma;

  //this.m_ptpMass = this.K.Invert();
  this.K.Invert(this.m_ptpMass);

  //this.m_C = b.m_position + r - this.m_target;
  this.m_C.x = b.m_position.x + rX - this.m_target.x;
  this.m_C.y = b.m_position.y + rY - this.m_target.y;

  // Cheat with some damping
  b.m_angularVelocity *= 0.98;

  // Warm starting.
  //box2d.Vec2 P = this.m_impulse;
  var PX = this.m_impulse.x;
  var PY = this.m_impulse.y;
  //b.m_linearVelocity += invMass * P;
  b.m_linearVelocity.x += invMass * PX;
  b.m_linearVelocity.y += invMass * PY;
  //b.m_angularVelocity += invI * b2Cross(r, P);
  b.m_angularVelocity += invI * (rX * PY - rY * PX);
};
box2d.MouseJoint.prototype.SolveVelocityConstraints = function(step) {
  var body = this.m_body2;

  var tMat;

  // Compute the effective mass matrix.
  //box2d.Vec2 r = b2Mul(body.m_R, this.m_localAnchor);
  tMat = body.m_R;
  var rX = tMat.col1.x * this.m_localAnchor.x + tMat.col2.x * this.m_localAnchor.y;
  var rY = tMat.col1.y * this.m_localAnchor.x + tMat.col2.y * this.m_localAnchor.y;

  // Cdot = v + cross(w, r)
  //box2d.Vec2 Cdot = body->m_linearVelocity + b2Cross(body->m_angularVelocity, r);
  var CdotX = body.m_linearVelocity.x + (-body.m_angularVelocity * rY);
  var CdotY = body.m_linearVelocity.y + (body.m_angularVelocity * rX);
  //box2d.Vec2 impulse = -b2Mul(this.m_ptpMass, Cdot + (this.m_beta * step->inv_dt) * this.m_C + this.m_gamma * this.m_impulse);
  tMat = this.m_ptpMass;
  var tX = CdotX + (this.m_beta * step.inv_dt) * this.m_C.x + this.m_gamma * this.m_impulse.x;
  var tY = CdotY + (this.m_beta * step.inv_dt) * this.m_C.y + this.m_gamma * this.m_impulse.y;
  var impulseX = -(tMat.col1.x * tX + tMat.col2.x * tY);
  var impulseY = -(tMat.col1.y * tX + tMat.col2.y * tY);

  var oldImpulseX = this.m_impulse.x;
  var oldImpulseY = this.m_impulse.y;
  //this.m_impulse += impulse;
  this.m_impulse.x += impulseX;
  this.m_impulse.y += impulseY;
  var length = this.m_impulse.magnitude();
  if (length > step.dt * this.m_maxForce) {
    //this.m_impulse *= step.dt * this.m_maxForce / length;
    this.m_impulse.scale(step.dt * this.m_maxForce / length);
  }
  //impulse = this.m_impulse - oldImpulse;
  impulseX = this.m_impulse.x - oldImpulseX;
  impulseY = this.m_impulse.y - oldImpulseY;

  //body.m_linearVelocity += body->m_invMass * impulse;
  body.m_linearVelocity.x += body.m_invMass * impulseX;
  body.m_linearVelocity.y += body.m_invMass * impulseY;
  //body.m_angularVelocity += body->m_invI * b2Cross(r, impulse);
  body.m_angularVelocity += body.m_invI * (rX * impulseY - rY * impulseX);
};
box2d.MouseJoint.prototype.SolvePositionConstraints = function() {
  return true;
};
