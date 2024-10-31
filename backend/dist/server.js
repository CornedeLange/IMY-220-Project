"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["passwordHash"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var express = require("express");
var path = require('path');
var fs = require('fs');
var multer = require('multer');

//ADDED FOR D2
//MONGO DB SETUP
var _require = require("mongodb"),
  MongoClient = _require.MongoClient;
var app = express();
var port = process.env.PORT || 3000;
var url = "mongodb+srv://Cornedl:Corne%40mongo@imy220.5pexm.mongodb.net/?retryWrites=true&w=majority&appName=IMY220";

//
var client = new MongoClient(url);
var db;
function connect() {
  return _connect.apply(this, arguments);
} //CONNECT
function _connect() {
  _connect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
    return _regeneratorRuntime().wrap(function _callee33$(_context33) {
      while (1) switch (_context33.prev = _context33.next) {
        case 0:
          _context33.prev = 0;
          _context33.next = 3;
          return client.connect();
        case 3:
          console.log("Connected to MongoDB");
          db = client.db("imy_220_project");
          _context33.next = 10;
          break;
        case 7:
          _context33.prev = 7;
          _context33.t0 = _context33["catch"](0);
          console.error("Failed to connect to MongoDB", _context33.t0);
        case 10:
        case "end":
          return _context33.stop();
      }
    }, _callee33, null, [[0, 7]]);
  }));
  return _connect.apply(this, arguments);
}
connect();
app.use(express.json());
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, path.join(__dirname, '..', '..', 'frontend', 'public', 'assests', 'images'));
    //cb(null, "../frontend/public/assests/images");
  },
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({
  storage: storage
});
var getUserCollection = function getUserCollection() {
  return db.collection("user");
};
var getPlaylistCollection = function getPlaylistCollection() {
  return db.collection("playlist");
};
var getSongCollection = function getSongCollection() {
  return db.collection("song");
};

//Register
app.post("/register", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, username, password, email, users, user, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, username = _req$body.username, password = _req$body.password, email = _req$body.email;
          if (!username || !password || !email) {
            res.status(400).send("Username, password and email are required");
          }
          users = db.collection("user");
          console.log("Collection 'user' accessed");
          _context.next = 7;
          return users.findOne({
            username: username
          });
        case 7:
          user = _context.sent;
          console.log("Existing user check:", user);
          if (!user) {
            _context.next = 13;
            break;
          }
          res.status(409).json({
            message: "Username already exists"
          });
          _context.next = 18;
          break;
        case 13:
          _context.next = 15;
          return users.insertOne({
            userId: "UD-".concat(Math.random().toString(36).substr(2, 9)),
            username: username,
            passwordHash: password,
            email: email,
            profilePicture: "https://via.placeholder.com/150",
            bio: "",
            age: 0,
            socials: {},
            numFollowers: 0,
            numFollowing: 0,
            friends: [],
            playlists: [],
            songs: [],
            //ADDED 
            savedPlaylists: []
          });
        case 15:
          result = _context.sent;
          console.log("Insertion result:", result);
          if (result.acknowledged) {
            res.status(201).json({
              message: "User registered",
              userId: result.insertedId,
              username: username
            });
          } else {
            res.status(500).json({
              message: "Failed to insert user"
            });
          }
        case 18:
          _context.next = 24;
          break;
        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](0);
          console.error("Failed to register user", _context.t0);
          res.status(500).send("Internal server error");
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 20]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

//LOGIN
app.post("/login", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body2, username, password, users, user;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password;
          users = db.collection("user"); //debug username, password
          console.log(username, password);
          _context2.next = 6;
          return users.findOne({
            username: username,
            passwordHash: password
          });
        case 6:
          user = _context2.sent;
          if (user) {
            res.status(200).json({
              message: "Login successful",
              userId: user.userId,
              username: user.username
            });
          } else {
            res.status(401).json({
              message: "Invalid credentials"
            });
          }
          _context2.next = 14;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error("Failed to login", _context2.t0);
          res.status(500).json({
            message: "Internal server error"
          });
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

//GET ALL USERS
app.get("/users", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var users, usersList;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          users = db.collection("user");
          _context3.next = 4;
          return users.find().toArray();
        case 4:
          usersList = _context3.sent;
          res.send(usersList);
          _context3.next = 12;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.error("Failed to retrieve users", _context3.t0);
          res.status(500).send("Internal server error");
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

//GET PROFILE
app.get("/api/profile/:userId", /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var userId, user, passwordHash, profileData;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          //console.log("Hello");
          userId = req.params.userId;
          _context4.prev = 1;
          _context4.next = 4;
          return getUserCollection().findOne({
            userId: userId
          });
        case 4:
          user = _context4.sent;
          if (user) {
            passwordHash = user.passwordHash, profileData = _objectWithoutProperties(user, _excluded); //res.status(200).send(profileData);
            res.status(200).send(user);
          } else {
            res.status(404).send("User not found");
          }
          _context4.next = 12;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          console.error("Failed to retrieve user profile", _context4.t0);
          res.status(500).send("Internal server error");
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

//UPDATE PROFILE ************************
app.put("/profile/:userId", upload.single('profilePicture'), /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var userId, updatedProfile, result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          userId = req.params.userId;
          updatedProfile = req.body;
          if (req.file) {
            updatedProfile.profilePicture = "/assests/images/".concat(req.file.filename);
          }

          // updatedProfile.profilePicture = `/assests/images/${req.file.filename}`; // Update profile picture URL
          _context5.prev = 3;
          _context5.next = 6;
          return getUserCollection().updateOne({
            userId: userId
          }, {
            $set: updatedProfile
          });
        case 6:
          result = _context5.sent;
          if (result.acknowledged) {
            //res.status(200).send("Profile updated");
            res.status(200).json({
              message: "Profile updated"
            });
          } else {
            // res.status(500).send("Failed to update profile");
            res.status(500).json({
              error: 'An error occurred while updating the profile.'
            });
          }
          _context5.next = 16;
          break;
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](3);
          if (!(_context5.t0 instanceof multer.MulterError)) {
            _context5.next = 14;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: _context5.t0.message
          }));
        case 14:
          console.error("Failed to update user profile", _context5.t0);
          res.status(500).send("Internal server error");
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[3, 10]]);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

//DELETE PROFILE ********************
app["delete"]("/profile/:userId", /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var userId, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          userId = req.params.userId;
          _context6.prev = 1;
          _context6.next = 4;
          return getUserCollection().deleteOne({
            userId: userId
          });
        case 4:
          result = _context6.sent;
          if (result.deletedCount > 0) {
            res.status(200).send("Profile deleted");
          } else {
            res.status(404).send("Profile not found");
          }
          _context6.next = 12;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](1);
          console.error("Failed to delete user profile", _context6.t0);
          res.status(500).send("Internal server error");
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());

//GET USERS PLAYLISTS   
app.get("/profile/:userId/playlists", /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var userId, user, playlistIds, playlists;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          //console.log("DAMNNNNNNNNN YOHHHHHHHHHH");
          userId = req.params.userId; //console.log("User ID", userId);
          _context7.prev = 1;
          _context7.next = 4;
          return getUserCollection().findOne({
            userId: userId
          });
        case 4:
          user = _context7.sent;
          if (user) {
            _context7.next = 8;
            break;
          }
          res.status(404).send("User not found");
          return _context7.abrupt("return");
        case 8:
          // Get playlist IDs from user document
          playlistIds = user.playlists; //console.log("Playlist IDs", playlistIds);
          // Query playlist collection using playlist IDs
          _context7.next = 11;
          return getPlaylistCollection().find({
            playlistId: {
              $in: playlistIds
            }
          }).toArray();
        case 11:
          playlists = _context7.sent;
          //console.log("Playlists", playlists);
          res.status(200).send(playlists);
          _context7.next = 19;
          break;
        case 15:
          _context7.prev = 15;
          _context7.t0 = _context7["catch"](1);
          console.error("Failed to retrieve user playlists", _context7.t0);
          res.status(500).send("Internal server error");
        case 19:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 15]]);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());

//GET USERS SONGS
app.get("/profile/:userId/songs", /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var userId, user, songIds, songs;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          userId = req.params.userId; //console.log("User ID", userId);
          _context8.prev = 1;
          _context8.next = 4;
          return getUserCollection().findOne({
            userId: userId
          });
        case 4:
          user = _context8.sent;
          if (user) {
            _context8.next = 8;
            break;
          }
          res.status(404).send("User not found");
          return _context8.abrupt("return");
        case 8:
          // Get song IDs from user document
          songIds = user.songs; //console.log("Song IDs", songIds);
          // Query song collection using song IDs
          _context8.next = 11;
          return getSongCollection().find({
            songId: {
              $in: songIds
            }
          }).toArray();
        case 11:
          songs = _context8.sent;
          //console.log("Songs", songs);
          res.status(200).send(songs);
          _context8.next = 19;
          break;
        case 15:
          _context8.prev = 15;
          _context8.t0 = _context8["catch"](1);
          console.error("Failed to retrieve user songs", _context8.t0);
          res.status(500).send("Internal server error");
        case 19:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[1, 15]]);
  }));
  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());

//*******************DO NOT USE THIS ******************* */
// FOLLOW A USER***********
app.post("/profile/:userId/follow", /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var userId, followerId, result;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          userId = req.params.userId;
          followerId = req.body.followerId; // The ID of the user who wants to follow
          _context9.prev = 2;
          _context9.next = 5;
          return getUserCollection().updateOne({
            userId: userId
          }, {
            $addToSet: {
              friends: followerId
            }
          } // Use $addToSet to avoid duplicates
          );
        case 5:
          result = _context9.sent;
          if (result.modifiedCount > 0) {
            res.status(200).send("Followed successfully");
          } else {
            res.status(400).send("Already following or user not found");
          }
          _context9.next = 13;
          break;
        case 9:
          _context9.prev = 9;
          _context9.t0 = _context9["catch"](2);
          console.error("Failed to follow user", _context9.t0);
          res.status(500).send("Internal server error");
        case 13:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[2, 9]]);
  }));
  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());

// UNFOLLOW A USER****
app.post("/profile/:userId/unfollow", /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var userId, followerId, result;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          userId = req.params.userId;
          followerId = req.body.followerId; // The ID of the user who wants to unfollow
          _context10.prev = 2;
          _context10.next = 5;
          return getUserCollection().updateOne({
            userId: userId
          }, {
            $pull: {
              friends: followerId
            }
          } // Use $pull to remove the followerId
          );
        case 5:
          result = _context10.sent;
          if (result.modifiedCount > 0) {
            res.status(200).send("Unfollowed successfully");
          } else {
            res.status(400).send("Not following or user not found");
          }
          _context10.next = 13;
          break;
        case 9:
          _context10.prev = 9;
          _context10.t0 = _context10["catch"](2);
          console.error("Failed to unfollow user", _context10.t0);
          res.status(500).send("Internal server error");
        case 13:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[2, 9]]);
  }));
  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}());
//*******************DO NOT USE THIS ******************* */

///ADD A FRIEND
app.post("/addFriend", /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _req$body3, userId, friendId, userCollection, user, friend, userUpdate, friendUpdate;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _req$body3 = req.body, userId = _req$body3.userId, friendId = _req$body3.friendId;
          if (!(!userId || !friendId)) {
            _context11.next = 3;
            break;
          }
          return _context11.abrupt("return", res.status(400).json({
            message: "Missing required fields"
          }));
        case 3:
          _context11.prev = 3;
          _context11.next = 6;
          return getUserCollection();
        case 6:
          userCollection = _context11.sent;
          _context11.next = 9;
          return userCollection.findOne({
            userId: userId
          });
        case 9:
          user = _context11.sent;
          _context11.next = 12;
          return userCollection.findOne({
            userId: friendId
          });
        case 12:
          friend = _context11.sent;
          if (!(!user || !friend)) {
            _context11.next = 15;
            break;
          }
          return _context11.abrupt("return", res.status(404).json({
            message: "One or both users not found"
          }));
        case 15:
          if (!user.friends.includes(friendId)) {
            _context11.next = 17;
            break;
          }
          return _context11.abrupt("return", res.status(400).json({
            message: "Already friends"
          }));
        case 17:
          _context11.next = 19;
          return userCollection.updateOne({
            userId: userId
          }, {
            $push: {
              friends: friendId
            }
          });
        case 19:
          userUpdate = _context11.sent;
          _context11.next = 22;
          return userCollection.updateOne({
            userId: friendId
          }, {
            $push: {
              friends: userId
            }
          });
        case 22:
          friendUpdate = _context11.sent;
          if (!(userUpdate.modifiedCount > 0 && friendUpdate.modifiedCount > 0)) {
            _context11.next = 27;
            break;
          }
          return _context11.abrupt("return", res.status(200).json({
            message: "Friend added"
          }));
        case 27:
          return _context11.abrupt("return", res.status(500).json({
            message: "Failed to add friend"
          }));
        case 28:
          _context11.next = 34;
          break;
        case 30:
          _context11.prev = 30;
          _context11.t0 = _context11["catch"](3);
          console.error("Failed to add friend", _context11.t0);
          return _context11.abrupt("return", res.status(500).json({
            message: "Internal server error"
          }));
        case 34:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[3, 30]]);
  }));
  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}());

//REMOVE A FRIEND
app.post("/removeFriend", /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var _req$body4, userId, friendId, userCollection, user, friend, userUpdate, friendUpdate;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _req$body4 = req.body, userId = _req$body4.userId, friendId = _req$body4.friendId;
          if (!(!userId || !friendId)) {
            _context12.next = 3;
            break;
          }
          return _context12.abrupt("return", res.status(400).json({
            message: "Missing required fields"
          }));
        case 3:
          _context12.prev = 3;
          _context12.next = 6;
          return getUserCollection();
        case 6:
          userCollection = _context12.sent;
          _context12.next = 9;
          return userCollection.findOne({
            userId: userId
          });
        case 9:
          user = _context12.sent;
          _context12.next = 12;
          return userCollection.findOne({
            userId: friendId
          });
        case 12:
          friend = _context12.sent;
          if (!(!user || !friend)) {
            _context12.next = 15;
            break;
          }
          return _context12.abrupt("return", res.status(404).json({
            message: "One or both users not found"
          }));
        case 15:
          if (user.friends.includes(friendId)) {
            _context12.next = 17;
            break;
          }
          return _context12.abrupt("return", res.status(400).json({
            message: "Not friends"
          }));
        case 17:
          _context12.next = 19;
          return userCollection.updateOne({
            userId: userId
          }, {
            $pull: {
              friends: friendId
            }
          });
        case 19:
          userUpdate = _context12.sent;
          _context12.next = 22;
          return userCollection.updateOne({
            userId: friendId
          }, {
            $pull: {
              friends: userId
            }
          });
        case 22:
          friendUpdate = _context12.sent;
          if (!(userUpdate.modifiedCount > 0 && friendUpdate.modifiedCount > 0)) {
            _context12.next = 27;
            break;
          }
          return _context12.abrupt("return", res.status(200).json({
            message: "Friend removed"
          }));
        case 27:
          return _context12.abrupt("return", res.status(500).json({
            message: "Failed to remove friend"
          }));
        case 28:
          _context12.next = 34;
          break;
        case 30:
          _context12.prev = 30;
          _context12.t0 = _context12["catch"](3);
          console.error("Failed to remove friend", _context12.t0);
          return _context12.abrupt("return", res.status(500).json({
            message: "Internal server error"
          }));
        case 34:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[3, 30]]);
  }));
  return function (_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}());

//CHECK IF USERS ARE FRIENDS
app.post("/checkFriendStatus", /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var _req$body5, userId, profileId, userCollection, user, isFriend;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _req$body5 = req.body, userId = _req$body5.userId, profileId = _req$body5.profileId;
          if (!(!userId || !profileId)) {
            _context13.next = 3;
            break;
          }
          return _context13.abrupt("return", res.status(400).json({
            message: "Missing required fields"
          }));
        case 3:
          _context13.prev = 3;
          _context13.next = 6;
          return getUserCollection();
        case 6:
          userCollection = _context13.sent;
          _context13.next = 9;
          return userCollection.findOne({
            userId: userId
          });
        case 9:
          user = _context13.sent;
          if (user) {
            _context13.next = 12;
            break;
          }
          return _context13.abrupt("return", res.status(404).json({
            message: "User not found"
          }));
        case 12:
          isFriend = user.friends.includes(profileId);
          return _context13.abrupt("return", res.status(200).json({
            isFriend: isFriend
          }));
        case 16:
          _context13.prev = 16;
          _context13.t0 = _context13["catch"](3);
          console.error("Failed to check friend status", _context13.t0);
          return _context13.abrupt("return", res.status(500).json({
            message: "Internal server error"
          }));
        case 20:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[3, 16]]);
  }));
  return function (_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}());

// Get the friends list of a user
app.get("/profile/:userId/friends", /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var userId, user, friends;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          userId = req.params.userId;
          _context14.prev = 1;
          _context14.next = 4;
          return getUserCollection().findOne({
            userId: userId
          });
        case 4:
          user = _context14.sent;
          if (!user) {
            _context14.next = 12;
            break;
          }
          _context14.next = 8;
          return getUserCollection().find({
            userId: {
              $in: user.friends
            }
          }).toArray();
        case 8:
          friends = _context14.sent;
          res.status(200).send(friends);
          _context14.next = 13;
          break;
        case 12:
          res.status(404).send("User not found");
        case 13:
          _context14.next = 19;
          break;
        case 15:
          _context14.prev = 15;
          _context14.t0 = _context14["catch"](1);
          console.error("Failed to retrieve friends", _context14.t0);
          res.status(500).send("Internal server error");
        case 19:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[1, 15]]);
  }));
  return function (_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}());

//CREATE A PLAYLIST ***********************************
app.post("/createPlaylist", upload.single('coverImage'), /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var _req$body6, playlistName, genre, description, hashtags, userId, coverImage, playlistId, newPlaylist, playListCollection, result, userCollection;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _req$body6 = req.body, playlistName = _req$body6.playlistName, genre = _req$body6.genre, description = _req$body6.description, hashtags = _req$body6.hashtags, userId = _req$body6.userId; // const coverImage = req.file ? req.file.path : req.body.coverImage;
          coverImage = req.file ? "/assests/images/".concat(req.file.filename) : "https://via.placeholder.com/150";
          if (!(!playlistName || !genre || !description || !userId)) {
            _context15.next = 4;
            break;
          }
          return _context15.abrupt("return", res.status(400).send("Playlist name, genre and description are required"));
        case 4:
          _context15.prev = 4;
          playlistId = "PL-".concat(Math.random().toString(36).substr(2, 9)); // Generate unique playlist ID
          newPlaylist = {
            playlistId: playlistId,
            name: playlistName,
            genre: genre,
            description: description,
            // coverImage: coverImage || "https://via.placeholder.com/150", // Optional cover image
            coverImage: coverImage,
            // hashtags: hashtags || [],
            hashtags: Array.isArray(hashtags) ? hashtags : [],
            numSongs: 0,
            songs: [],
            comments: [],
            createdBy: userId,
            dateCreated: new Date().toISOString()
          };
          _context15.next = 9;
          return getPlaylistCollection();
        case 9:
          playListCollection = _context15.sent;
          _context15.next = 12;
          return playListCollection.insertOne(newPlaylist);
        case 12:
          result = _context15.sent;
          _context15.next = 15;
          return getUserCollection().updateOne({
            userId: userId
          }, {
            $push: {
              playlists: newPlaylist.playlistId
            }
          } // Add the playlist to the user's playlists array
          );
        case 15:
          userCollection = _context15.sent;
          console.log("Modified count: ", result.insertedCount, userCollection.modifiedCount);
          if (result.acknowledged > 0 && userCollection.modifiedCount > 0) {
            // res.status(201).send("Playlist created");
            res.status(200).json({
              message: "Playlist created successfully",
              playlistId: playlistId
            });
          } else {
            //res.status(404).send("User not found");
            //res.status(500).send("Failed to create playlist");
            res.status(400).json({
              message: "Failed to create playlist"
            });
          }
          _context15.next = 24;
          break;
        case 20:
          _context15.prev = 20;
          _context15.t0 = _context15["catch"](4);
          console.error("Failed to create playlist", _context15.t0);
          //res.status(500).send("Internal server error");
          res.status(500).json({
            message: "Internal server error"
          });
        case 24:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[4, 20]]);
  }));
  return function (_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}());

//GET SPECIFIC PLAYLIST
app.get("/api/playlist/:playlistId", /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var playlistId, playlist, user;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          playlistId = req.params.playlistId; //console.log("PlaylistID :" , playlistId);
          _context16.prev = 1;
          _context16.next = 4;
          return getPlaylistCollection().findOne({
            playlistId: playlistId
          });
        case 4:
          playlist = _context16.sent;
          if (!playlist.comments) {
            playlist.comments = [];
          }
          //fetch user
          _context16.next = 8;
          return getUserCollection().findOne({
            userId: playlist.createdBy
          });
        case 8:
          user = _context16.sent;
          if (playlist && user) {
            res.status(200).json({
              playlist: playlist,
              user: user
            });
          } else {
            // res.status(404).send("Playlist not found");
            res.status(404).json({
              message: "Playlist not found"
            });
          }
          _context16.next = 16;
          break;
        case 12:
          _context16.prev = 12;
          _context16.t0 = _context16["catch"](1);
          console.error("Failed to retrieve playlist", _context16.t0);
          //res.status(500).send("Internal server error");
          res.status(500).json({
            message: "Internal server error"
          });
        case 16:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[1, 12]]);
  }));
  return function (_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}());

//ADD A COMMENT to a playlist
app.post("/playlist/:playlistId/comment", /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var playlistId, _req$body7, userId, comment, result, newComment;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          playlistId = req.params.playlistId;
          _req$body7 = req.body, userId = _req$body7.userId, comment = _req$body7.comment;
          if (!(!userId || !comment)) {
            _context17.next = 4;
            break;
          }
          return _context17.abrupt("return", res.status(400).json({
            message: "User ID and comment are required"
          }));
        case 4:
          _context17.prev = 4;
          _context17.next = 7;
          return getPlaylistCollection().updateOne({
            playlistId: playlistId
          }, {
            $push: {
              comments: {
                userId: userId,
                comment: comment,
                date: new Date().toISOString()
              }
            }
          });
        case 7:
          result = _context17.sent;
          if (!(result.modifiedCount > 0)) {
            _context17.next = 15;
            break;
          }
          _context17.next = 11;
          return getPlaylistCollection().findOne({
            playlistId: playlistId
          }, {
            projection: {
              comments: {
                $elemMatch: {
                  userId: userId,
                  comment: comment
                }
              }
            }
          });
        case 11:
          newComment = _context17.sent;
          res.status(201).json({
            message: "Comment added",
            newComment: newComment.comments[0]
          });
          _context17.next = 16;
          break;
        case 15:
          res.status(404).json({
            message: "Playlist not found"
          });
        case 16:
          _context17.next = 22;
          break;
        case 18:
          _context17.prev = 18;
          _context17.t0 = _context17["catch"](4);
          console.error("Failed to add comment", _context17.t0);
          //res.status(500).send("Internal server error");
          res.status(500).json({
            message: "Internal server error"
          });
        case 22:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[4, 18]]);
  }));
  return function (_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}());

//fetch playlist comments
app.get('/api/comments/:playlistId', /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var playlistId, playlist, comments, commentsWithUsernames;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          playlistId = req.params.playlistId;
          _context19.prev = 1;
          _context19.next = 4;
          return getPlaylistCollection().findOne({
            playlistId: playlistId
          });
        case 4:
          playlist = _context19.sent;
          if (playlist) {
            _context19.next = 7;
            break;
          }
          return _context19.abrupt("return", res.status(404).json({
            message: "Playlist not found"
          }));
        case 7:
          comments = playlist.comments;
          _context19.next = 10;
          return Promise.all(comments.map( /*#__PURE__*/function () {
            var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(comment) {
              var user;
              return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                while (1) switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return getUserCollection().findOne({
                      userId: comment.userId
                    });
                  case 2:
                    user = _context18.sent;
                    return _context18.abrupt("return", _objectSpread(_objectSpread({}, comment), {}, {
                      username: user.username
                    }));
                  case 4:
                  case "end":
                    return _context18.stop();
                }
              }, _callee18);
            }));
            return function (_x37) {
              return _ref19.apply(this, arguments);
            };
          }()));
        case 10:
          commentsWithUsernames = _context19.sent;
          res.status(200).json(commentsWithUsernames);
          _context19.next = 18;
          break;
        case 14:
          _context19.prev = 14;
          _context19.t0 = _context19["catch"](1);
          console.error("Failed to retrieve comments", _context19.t0);
          res.status(500).json({
            message: "Internal server error"
          });
        case 18:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[1, 14]]);
  }));
  return function (_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}());

//SAVE PLAYLIST FOR USER
app.put('/api/users/save-playlist', /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var _req$body8, userId, playlistId, user;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _req$body8 = req.body, userId = _req$body8.userId, playlistId = _req$body8.playlistId;
          _context20.prev = 1;
          _context20.next = 4;
          return getUserCollection().findOneAndUpdate({
            userId: userId
          }, {
            $addToSet: {
              savedPlaylists: playlistId
            }
          }, {
            "new": true
          });
        case 4:
          user = _context20.sent;
          res.json(user);
          _context20.next = 12;
          break;
        case 8:
          _context20.prev = 8;
          _context20.t0 = _context20["catch"](1);
          console.error("Failed to save playlist", _context20.t0);
          res.status(500).json({
            message: "Internal server error"
          });
        case 12:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[1, 8]]);
  }));
  return function (_x38, _x39) {
    return _ref20.apply(this, arguments);
  };
}());

//FETCH USER SAVED PLAYLIST AND SEE IF ALREADY SAVED
app.get('/api/users/saved-playlists', /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var userId, user;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          userId = req.query.userId;
          _context21.prev = 1;
          _context21.next = 4;
          return getUserCollection().findOne({
            userId: userId
          });
        case 4:
          user = _context21.sent;
          res.json(user.savedPlaylists);
          _context21.next = 12;
          break;
        case 8:
          _context21.prev = 8;
          _context21.t0 = _context21["catch"](1);
          console.error("Failed to retrieve saved playlists", _context21.t0);
          res.status(500).json({
            message: "Internal server error"
          });
        case 12:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[1, 8]]);
  }));
  return function (_x40, _x41) {
    return _ref21.apply(this, arguments);
  };
}());

//FETCH USERS SAVED PLAYLIST WITH INFO
app.get('/api/users/saved-playlists-info', /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var userId, user, savedPlaylists;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          userId = req.query.userId;
          _context22.prev = 1;
          _context22.next = 4;
          return getUserCollection().findOne({
            userId: userId
          });
        case 4:
          user = _context22.sent;
          if (!(!user || !user.savedPlaylists)) {
            _context22.next = 7;
            break;
          }
          return _context22.abrupt("return", res.json([]));
        case 7:
          _context22.next = 9;
          return getPlaylistCollection().find({
            playlistId: {
              $in: user.savedPlaylists
            }
          }).toArray();
        case 9:
          savedPlaylists = _context22.sent;
          res.json(savedPlaylists);
          _context22.next = 17;
          break;
        case 13:
          _context22.prev = 13;
          _context22.t0 = _context22["catch"](1);
          console.error("Failed to retrieve saved playlists", _context22.t0);
          res.status(500).json({
            message: "Internal server error"
          });
        case 17:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[1, 13]]);
  }));
  return function (_x42, _x43) {
    return _ref22.apply(this, arguments);
  };
}());

//ADD SONG TO PLAYLIST
app.post("/playlist/:playlistId/song", /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var playlistId, _req$body9, name, artist, link, addedBy, songId, songResult, playlistResult;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          playlistId = req.params.playlistId;
          _req$body9 = req.body, name = _req$body9.name, artist = _req$body9.artist, link = _req$body9.link, addedBy = _req$body9.addedBy;
          if (!(!name || !artist || !link || !addedBy)) {
            _context23.next = 4;
            break;
          }
          return _context23.abrupt("return", res.status(400).json({
            message: "Missing required fields"
          }));
        case 4:
          _context23.prev = 4;
          songId = "SG-".concat(Math.random().toString(36).substr(2, 9));
          _context23.next = 8;
          return getSongCollection().insertOne({
            songId: songId,
            name: name,
            artist: artist,
            link: link,
            addedBy: addedBy,
            dateAdded: new Date().toISOString()
          });
        case 8:
          songResult = _context23.sent;
          _context23.next = 11;
          return getPlaylistCollection().updateOne({
            playlistId: playlistId
          }, {
            $push: {
              songs: {
                songId: songId,
                name: name,
                artist: artist
              }
            }
          });
        case 11:
          playlistResult = _context23.sent;
          if (songResult.acknowledged && playlistResult.modifiedCount > 0) {
            res.status(201).json({
              message: "Song added to playlist"
            });
          } else {
            res.status(500).json({
              message: "Failed to add song to playlist"
            });
          }
          _context23.next = 19;
          break;
        case 15:
          _context23.prev = 15;
          _context23.t0 = _context23["catch"](4);
          console.error(_context23.t0);
          res.status(500).json({
            message: "Internal server error"
          });
        case 19:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[4, 15]]);
  }));
  return function (_x44, _x45) {
    return _ref23.apply(this, arguments);
  };
}());

// Update an existing playlist
app.put("/playlist/:playlistId", upload.single('coverImage'), /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var playlistId, updatedPlaylist, playlistCollection, result;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          playlistId = req.params.playlistId;
          updatedPlaylist = req.body; //console.log("UPDATED PLAYLIST: ", updatedPlaylist);
          //updatedPlaylist.coverImage = `/assests/images/${req.file.filename}`; // Update cover image URL
          if (req.file) {
            updatedPlaylist.coverImage = "/assests/images/".concat(req.file.filename);
          }

          //make hashtags an array
          updatedPlaylist.hashtags = Array.isArray(updatedPlaylist.hashtags) ? updatedPlaylist.hashtags : updatedPlaylist.hashtags.split(",").map(function (tag) {
            return tag.trim();
          });
          _context24.prev = 4;
          _context24.next = 7;
          return getPlaylistCollection();
        case 7:
          playlistCollection = _context24.sent;
          _context24.next = 10;
          return playlistCollection.updateOne({
            playlistId: playlistId
          }, {
            $set: updatedPlaylist
          });
        case 10:
          result = _context24.sent;
          if (result.acknowledged) {
            //console.log("UPDATED PLAYLIST: ", updatedPlaylist)
            res.status(200).json({
              success: true,
              message: "Playlist updated"
            });
          } else {
            res.status(500).json({
              success: false,
              message: "Failed to update playlist"
            });
          }
          _context24.next = 18;
          break;
        case 14:
          _context24.prev = 14;
          _context24.t0 = _context24["catch"](4);
          console.error("Failed to update playlist", _context24.t0);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 18:
        case "end":
          return _context24.stop();
      }
    }, _callee24, null, [[4, 14]]);
  }));
  return function (_x46, _x47) {
    return _ref24.apply(this, arguments);
  };
}());

//DELETE A PLAYLIST 
app["delete"]("/playlist/:playlistId", /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    var playlistId, result;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          playlistId = req.params.playlistId;
          _context25.prev = 1;
          _context25.next = 4;
          return getPlaylistCollection().deleteOne({
            playlistId: playlistId
          });
        case 4:
          result = _context25.sent;
          if (result.deletedCount > 0) {
            res.json({
              success: true
            });
          } else {
            res.status(404).json({
              success: false,
              message: "Playlist not found"
            });
          }
          _context25.next = 12;
          break;
        case 8:
          _context25.prev = 8;
          _context25.t0 = _context25["catch"](1);
          console.error(_context25.t0);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 12:
        case "end":
          return _context25.stop();
      }
    }, _callee25, null, [[1, 8]]);
  }));
  return function (_x48, _x49) {
    return _ref25.apply(this, arguments);
  };
}());

//FETCH SPECIFIC SONG
app.get("/api/songs/:songId", /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    var songId, song;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          songId = req.params.songId;
          _context26.prev = 1;
          _context26.next = 4;
          return getSongCollection().findOne({
            songId: songId
          });
        case 4:
          song = _context26.sent;
          if (song) {
            res.status(200).send(song);
          } else {
            res.status(404).send("Song not found");
          }
          _context26.next = 12;
          break;
        case 8:
          _context26.prev = 8;
          _context26.t0 = _context26["catch"](1);
          console.error("Failed to retrieve song", _context26.t0);
          res.status(500).send("Internal server error");
        case 12:
        case "end":
          return _context26.stop();
      }
    }, _callee26, null, [[1, 8]]);
  }));
  return function (_x50, _x51) {
    return _ref26.apply(this, arguments);
  };
}());

//DELETE A SONG
// DELETE /api/playlists/:playlistId/songs/:songId
app["delete"]("/api/playlists/:playlistId/songs/:songId", /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    var playlistId, songId, playlist;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          playlistId = req.params.playlistId;
          songId = req.params.songId;
          _context27.prev = 2;
          _context27.next = 5;
          return getPlaylistCollection().findOneAndUpdate({
            playlistId: playlistId
          }, {
            $pull: {
              songs: {
                songId: songId
              }
            }
          }, {
            "new": true
          });
        case 5:
          playlist = _context27.sent;
          if (playlist) {
            res.status(200).send(playlist);
          } else {
            res.status(404).send("Playlist not found");
          }
          _context27.next = 13;
          break;
        case 9:
          _context27.prev = 9;
          _context27.t0 = _context27["catch"](2);
          console.error("Failed to delete song from playlist", _context27.t0);
          res.status(500).send("Internal server error");
        case 13:
        case "end":
          return _context27.stop();
      }
    }, _callee27, null, [[2, 9]]);
  }));
  return function (_x52, _x53) {
    return _ref27.apply(this, arguments);
  };
}());

//GET ALL SONGS FOR HOME AND EXPLORE PAGE
app.get("/songs", /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res) {
    var songs;
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          _context28.prev = 0;
          _context28.next = 3;
          return getSongCollection().find().toArray();
        case 3:
          songs = _context28.sent;
          res.send(songs);
          _context28.next = 11;
          break;
        case 7:
          _context28.prev = 7;
          _context28.t0 = _context28["catch"](0);
          console.error("Failed to retrieve songs", _context28.t0);
          res.status(500).send("Internal server error");
        case 11:
        case "end":
          return _context28.stop();
      }
    }, _callee28, null, [[0, 7]]);
  }));
  return function (_x54, _x55) {
    return _ref28.apply(this, arguments);
  };
}());

//GET ALL PLAYLISTS FOR HOME AND EXPLORE
app.get("/playlists", /*#__PURE__*/function () {
  var _ref29 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(req, res) {
    var playlists;
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          _context29.prev = 0;
          _context29.next = 3;
          return getPlaylistCollection().find().toArray();
        case 3:
          playlists = _context29.sent;
          res.send(playlists);
          _context29.next = 11;
          break;
        case 7:
          _context29.prev = 7;
          _context29.t0 = _context29["catch"](0);
          console.error("Failed to retrieve playlists", _context29.t0);
          res.status(500).send("Internal server error");
        case 11:
        case "end":
          return _context29.stop();
      }
    }, _callee29, null, [[0, 7]]);
  }));
  return function (_x56, _x57) {
    return _ref29.apply(this, arguments);
  };
}());

//get all PROFILES FOR EXPLORE PAGE
app.get("/profiles", /*#__PURE__*/function () {
  var _ref30 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(req, res) {
    var profiles;
    return _regeneratorRuntime().wrap(function _callee30$(_context30) {
      while (1) switch (_context30.prev = _context30.next) {
        case 0:
          _context30.prev = 0;
          _context30.next = 3;
          return getUserCollection().find().toArray();
        case 3:
          profiles = _context30.sent;
          res.send(profiles);
          _context30.next = 11;
          break;
        case 7:
          _context30.prev = 7;
          _context30.t0 = _context30["catch"](0);
          console.error("Failed to retrieve profiles", _context30.t0);
          res.status(500).send("Internal server error");
        case 11:
        case "end":
          return _context30.stop();
      }
    }, _callee30, null, [[0, 7]]);
  }));
  return function (_x58, _x59) {
    return _ref30.apply(this, arguments);
  };
}());

//ADD SONG TO WEBSITE ROUTE 
app.post("/addSongToWebsite", /*#__PURE__*/function () {
  var _ref31 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(req, res) {
    var _req$body10, name, artist, link, addedBy, songId, result, user;
    return _regeneratorRuntime().wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          _req$body10 = req.body, name = _req$body10.name, artist = _req$body10.artist, link = _req$body10.link, addedBy = _req$body10.addedBy;
          if (!(!name || !artist || !link || !addedBy)) {
            _context31.next = 3;
            break;
          }
          return _context31.abrupt("return", res.status(400).json({
            message: "Missing required fields"
          }));
        case 3:
          _context31.prev = 3;
          songId = "SG-".concat(Math.random().toString(36).substr(2, 9));
          _context31.next = 7;
          return getSongCollection().insertOne({
            songId: songId,
            name: name,
            artist: artist,
            link: link,
            addedBy: addedBy,
            dateAdded: new Date().toISOString()
          });
        case 7:
          result = _context31.sent;
          // const songId = result.songId;
          console.log("SONG ID: ", songId);
          _context31.next = 11;
          return getUserCollection().updateOne({
            userId: addedBy
          }, {
            $push: {
              songs: songId
            }
          });
        case 11:
          user = _context31.sent;
          if (result.acknowledged && user.modifiedCount > 0) {
            res.status(201).json({
              message: "Song added"
            });
          } else {
            res.status(500).json({
              message: "Failed to add song"
            });
          }
          _context31.next = 19;
          break;
        case 15:
          _context31.prev = 15;
          _context31.t0 = _context31["catch"](3);
          console.error("Failed to add song", _context31.t0);
          res.status(500).json({
            message: "Internal server error"
          });
        case 19:
        case "end":
          return _context31.stop();
      }
    }, _callee31, null, [[3, 15]]);
  }));
  return function (_x60, _x61) {
    return _ref31.apply(this, arguments);
  };
}());

//splash page
// app.get("/splash", (req, res) => {
//     res.status(200).send("Welcome to the Music App");
// });

//logout
app.post("/logout", function (req, res) {
  res.status(200).send("Logged out");
});
app.use(express["static"](path.join(__dirname, '..', '..', 'frontend', 'public')));
// Serve index.html for all other routes
app.get('*', function (req, res) {
  // res.sendFile(indexPath);
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'public', 'index.html'));
});
app.listen(port, function () {
  console.log("Server is running on http://localhost:".concat(port));
}).on('close', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
  return _regeneratorRuntime().wrap(function _callee32$(_context32) {
    while (1) switch (_context32.prev = _context32.next) {
      case 0:
        _context32.next = 2;
        return client.close();
      case 2:
        console.log('MongoDB connection closed');
      case 3:
      case "end":
        return _context32.stop();
    }
  }, _callee32);
})));