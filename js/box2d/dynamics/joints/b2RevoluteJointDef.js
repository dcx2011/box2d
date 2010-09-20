﻿/*
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

goog.provide('box2d.RevoluteJointDef');

goog.require('box2d.Vec2');
goog.require('box2d.JointDef');
goog.require('box2d.Joint');

/** 
 @constructor 
 */
box2d.RevoluteJointDef = function() {
  // The constructor for b2JointDef
  this.type = box2d.Joint.e_unknownJoint;
  this.userData = null;
  this.body1 = null;
  this.body2 = null;
  this.collideConnected = false;
  //
  this.type = box2d.Joint.e_revoluteJoint;
  this.anchorPoint = new box2d.Vec2(0.0, 0.0);
  this.lowerAngle = 0.0;
  this.upperAngle = 0.0;
  this.motorTorque = 0.0;
  this.motorSpeed = 0.0;
  this.enableLimit = false;
  this.enableMotor = false;
};

goog.object.extend(box2d.RevoluteJointDef.prototype, box2d.JointDef.prototype);
goog.object.extend(box2d.RevoluteJointDef.prototype, {

  anchorPoint: null,
  lowerAngle: null,
  upperAngle: null,
  motorTorque: null,
  motorSpeed: null,
  enableLimit: null,
  enableMotor: null
});
