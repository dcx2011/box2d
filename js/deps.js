// This file was autogenerated by calcdeps.py
goog.addDependency("../../../../js/box2d/collision/b2AABB.js", ['box2d.AABB'], ['box2d.Vec2']);
goog.addDependency("../../../../js/box2d/collision/b2Bound.js", ['box2d.Bound'], []);
goog.addDependency("../../../../js/box2d/collision/b2BoundValues.js", ['box2d.BoundValues'], []);
goog.addDependency("../../../../js/box2d/collision/b2BroadPhase.js", ['box2d.BroadPhase'], ['box2d.PairManager', 'box2d.Vec2', 'box2d.Bound', 'box2d.Settings', 'box2d.Proxy', 'box2d.BoundValues']);
goog.addDependency("../../../../js/box2d/collision/b2BufferedPair.js", ['box2d.BufferedPair'], []);
goog.addDependency("../../../../js/box2d/collision/b2Collision.js", ['box2d.Collision'], ['ClipVertex']);
goog.addDependency("../../../../js/box2d/collision/b2ContactID.js", ['box2d.ContactID'], ['Features']);
goog.addDependency("../../../../js/box2d/collision/b2ContactPoint.js", ['box2d.ContactPoint'], ['box2d.Vec2', 'box2d.ContactID']);
goog.addDependency("../../../../js/box2d/collision/b2Distance.js", ['box2d.Distance'], ['box2d.Math']);
goog.addDependency("../../../../js/box2d/collision/b2Manifold.js", ['box2d.Manifold'], ['box2d.Settings', 'box2d.Vec2', 'box2d.ContactPoint']);
goog.addDependency("../../../../js/box2d/collision/b2OBB.js", ['box2d.OBB'], ['box2d.Vec2', 'box2d.Mat22']);
goog.addDependency("../../../../js/box2d/collision/b2Pair.js", ['box2d.Pair'], ['box2d.Settings']);
goog.addDependency("../../../../js/box2d/collision/b2PairCallback.js", ['box2d.PairCallback'], []);
goog.addDependency("../../../../js/box2d/collision/b2PairManager.js", ['box2d.PairManager'], ['box2d.Pair', 'box2d.BufferedPair']);
goog.addDependency("../../../../js/box2d/collision/b2Proxy.js", ['box2d.Proxy'], ['box2d.Settings']);
goog.addDependency("../../../../js/box2d/collision/ClipVertex.js", ['ClipVertex'], ['box2d.Vec2', 'box2d.ContactID']);
goog.addDependency("../../../../js/box2d/collision/Features.js", ['Features'], []);
goog.addDependency("../../../../js/box2d/collision/shapes/b2BoxDef.js", ['box2d.BoxDef'], ['box2d.ShapeDef', 'box2d.Vec2']);
goog.addDependency("../../../../js/box2d/collision/shapes/b2CircleDef.js", ['box2d.CircleDef'], ['box2d.Shape', 'box2d.Vec2', 'box2d.ShapeDef']);
goog.addDependency("../../../../js/box2d/collision/shapes/b2CircleShape.js", ['box2d.CircleShape'], ['box2d.Mat22', 'box2d.Vec2', 'box2d.AABB', 'box2d.Shape']);
goog.addDependency("../../../../js/box2d/collision/shapes/b2MassData.js", ['box2d.MassData'], ['box2d.Vec2']);
goog.addDependency("../../../../js/box2d/collision/shapes/b2PolyDef.js", ['box2d.PolyDef'], ['box2d.ShapeDef', 'box2d.Shape', 'box2d.Vec2']);
goog.addDependency("../../../../js/box2d/collision/shapes/b2PolyShape.js", ['box2d.PolyShape'], ['box2d.Mat22', 'box2d.Vec2', 'box2d.Settings', 'box2d.Shape', 'box2d.OBB']);
goog.addDependency("../../../../js/box2d/collision/shapes/b2Shape.js", ['box2d.Shape'], ['box2d.Mat22', 'box2d.Vec2']);
goog.addDependency("../../../../js/box2d/collision/shapes/b2ShapeDef.js", ['box2d.ShapeDef'], ['box2d.Vec2']);
goog.addDependency("../../../../js/box2d/collision/shapes/b2ShapeFactory.js", ['box2d.ShapeFactory'], ['box2d.CircleShape', 'box2d.PolyShape', 'box2d.Shape']);
goog.addDependency("../../../../js/box2d/common/b2Settings.js", ['box2d.Settings'], []);
goog.addDependency("../../../../js/box2d/common/math/b2Mat22.js", ['box2d.Mat22'], []);
goog.addDependency("../../../../js/box2d/common/math/b2Math.js", ['box2d.Math'], []);
goog.addDependency("../../../../js/box2d/common/math/b2Vec2.js", ['box2d.Vec2'], ['box2d.Math']);
goog.addDependency("../../../../js/box2d/dynamics/b2Body.js", ['box2d.Body'], ['box2d.Mat22', 'box2d.Vec2', 'box2d.Math', 'box2d.MassData', 'box2d.ShapeFactory']);
goog.addDependency("../../../../js/box2d/dynamics/b2BodyDef.js", ['box2d.BodyDef'], ['box2d.Settings']);
goog.addDependency("../../../../js/box2d/dynamics/b2CollisionFilter.js", ['box2d.CollisionFilter'], []);
goog.addDependency("../../../../js/box2d/dynamics/b2ContactManager.js", ['box2d.ContactManager'], ['box2d.Contact', 'box2d.PairCallback', 'box2d.NullContact', 'box2d.ContactFactory']);
goog.addDependency("../../../../js/box2d/dynamics/b2Island.js", ['box2d.Island'], ['box2d.ContactSolver']);
goog.addDependency("../../../../js/box2d/dynamics/b2TimeStep.js", ['box2d.TimeStep'], []);
goog.addDependency("../../../../js/box2d/dynamics/b2World.js", ['box2d.World'], ['box2d.TimeStep', 'box2d.ContactManager', 'box2d.CollisionFilter', 'box2d.BroadPhase', 'box2d.Body', 'box2d.Island', 'box2d.JointFactory', 'box2d.WorldListener']);
goog.addDependency("../../../../js/box2d/dynamics/b2WorldListener.js", ['box2d.WorldListener'], []);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2CircleContact.js", ['box2d.CircleContact'], ['box2d.Contact', 'box2d.Manifold', 'box2d.Collision']);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2Conservative.js", ['box2d.Conservative'], []);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2Contact.js", ['box2d.Contact'], ['box2d.ContactNode', 'box2d.ContactRegister']);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2ContactConstraint.js", ['box2d.ContactConstraint'], ['box2d.ContactConstraintPoint', 'box2d.Settings', 'box2d.Vec2']);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2ContactConstraintPoint.js", ['box2d.ContactConstraintPoint'], ['box2d.Vec2']);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2ContactFactory.js", ['box2d.ContactFactory'], ['box2d.CircleContact', 'box2d.PolyAndCircleContact', 'box2d.PolyContact']);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2ContactNode.js", ['box2d.ContactNode'], []);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2ContactRegister.js", ['box2d.ContactRegister'], []);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2ContactSolver.js", ['box2d.ContactSolver'], ['box2d.Settings', 'box2d.ContactConstraint']);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2NullContact.js", ['box2d.NullContact'], ['box2d.Contact', 'box2d.ContactNode']);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2PolyAndCircleContact.js", ['box2d.PolyAndCircleContact'], ['box2d.Contact', 'box2d.ContactNode', 'box2d.Manifold']);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2PolyContact.js", ['box2d.PolyContact'], ['box2d.ContactNode', 'box2d.Math', 'box2d.Manifold']);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2DistanceJoint.js", ['box2d.DistanceJoint'], ['box2d.Joint']);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2DistanceJointDef.js", ['box2d.DistanceJointDef'], []);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2GearJoint.js", ['box2d.GearJoint'], ['box2d.Joint']);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2GearJointDef.js", ['box2d.GearJointDef'], []);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2Jacobian.js", ['box2d.Jacobian'], ['box2d.Vec2']);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2Joint.js", ['box2d.Joint'], ['box2d.JointNode']);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2JointDef.js", ['box2d.JointDef'], ['box2d.Joint']);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2JointFactory.js", ['box2d.JointFactory'], ['box2d.RevoluteJoint', 'box2d.PrismaticJoint', 'box2d.MouseJoint', 'box2d.DistanceJoint', 'box2d.PulleyJoint', 'box2d.GearJoint']);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2JointNode.js", ['box2d.JointNode'], []);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2MouseJoint.js", ['box2d.MouseJoint'], []);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2MouseJointDef.js", ['box2d.MouseJointDef'], []);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2PrismaticJoint.js", ['box2d.PrismaticJoint'], ['box2d.Joint', 'box2d.Vec2', 'box2d.Jacobian']);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2PrismaticJointDef.js", ['box2d.PrismaticJointDef'], ['box2d.JointDef', 'box2d.Vec2']);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2PulleyJoint.js", ['box2d.PulleyJoint'], []);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2PulleyJointDef.js", ['box2d.PulleyJointDef'], []);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2RevoluteJoint.js", ['box2d.RevoluteJoint'], ['box2d.Joint']);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2RevoluteJointDef.js", ['box2d.RevoluteJointDef'], ['box2d.Vec2', 'box2d.JointDef', 'box2d.Joint']);
goog.addDependency("../../../../js/demo/demo.js", ['Demo', 'Demo.FrameEvent'], ['goog.events', 'goog.events.EventType', 'goog.math.Vec2', 'goog.events.EventTarget', 'box2d.AABB', 'box2d.World', 'box2d.BodyDef', 'box2d.BoxDef', 'box2d.CircleDef', 'pixelLab.FpsLogger', 'demoDraw', 'demos.stack', 'demos.pendulum', 'demos.top', 'demos.crank', 'demos.compound']);
goog.addDependency("../../../../js/demo/demoDraw.js", ['demoDraw'], []);
goog.addDependency("../../../../js/demo/demos/compound.js", ['demos.compound'], []);
goog.addDependency("../../../../js/demo/demos/crank.js", ['demos.crank'], ['box2d.PrismaticJointDef', 'box2d.BoxDef', 'box2d.BodyDef', 'box2d.RevoluteJointDef']);
goog.addDependency("../../../../js/demo/demos/pendulum.js", ['demos.pendulum'], ['box2d.RevoluteJointDef']);
goog.addDependency("../../../../js/demo/demos/stack.js", ['demos.stack'], []);
goog.addDependency("../../../../js/demo/demos/top.js", ['demos.top'], ['box2d.RevoluteJointDef', 'box2d.CircleDef', 'box2d.PolyDef', 'box2d.BodyDef']);
goog.addDependency("../../../../js/pixelLab/FpsLogger.js", ['pixelLab.FpsLogger'], []);
goog.addDependency("../../../../js/application.js", [], ['Demo', 'Demo.FrameEvent']);
