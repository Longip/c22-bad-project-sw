import "./modulepreload-polyfill.b7f2da20.js";
var glightbox = "";
var album = "";
!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).GLightbox = t();
}(globalThis, function() {
  function e(t2) {
    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
      return typeof e2;
    } : function(e2) {
      return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
    })(t2);
  }
  function t(e2, t2) {
    if (!(e2 instanceof t2))
      throw new TypeError("Cannot call a class as a function");
  }
  function i(e2, t2) {
    for (var i2 = 0; i2 < t2.length; i2++) {
      var n2 = t2[i2];
      n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, n2.key, n2);
    }
  }
  function n(e2, t2, n2) {
    return t2 && i(e2.prototype, t2), n2 && i(e2, n2), e2;
  }
  var s = Date.now();
  function l() {
    var e2 = {}, t2 = true, i2 = 0, n2 = arguments.length;
    "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t2 = arguments[0], i2++);
    for (var s2 = function(i3) {
      for (var n3 in i3)
        Object.prototype.hasOwnProperty.call(i3, n3) && (t2 && "[object Object]" === Object.prototype.toString.call(i3[n3]) ? e2[n3] = l(true, e2[n3], i3[n3]) : e2[n3] = i3[n3]);
    }; i2 < n2; i2++) {
      var o2 = arguments[i2];
      s2(o2);
    }
    return e2;
  }
  function o(e2, t2) {
    if ((k(e2) || e2 === window || e2 === document) && (e2 = [e2]), A(e2) || L(e2) || (e2 = [e2]), 0 != P(e2)) {
      if (A(e2) && !L(e2))
        for (var i2 = e2.length, n2 = 0; n2 < i2 && false !== t2.call(e2[n2], e2[n2], n2, e2); n2++)
          ;
      else if (L(e2)) {
        for (var s2 in e2)
          if (O(e2, s2) && false === t2.call(e2[s2], e2[s2], s2, e2))
            break;
      }
    }
  }
  function r(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n2 = e2[s] = e2[s] || [], l2 = { all: n2, evt: null, found: null };
    return t2 && i2 && P(n2) > 0 && o(n2, function(e3, n3) {
      if (e3.eventName == t2 && e3.fn.toString() == i2.toString())
        return l2.found = true, l2.evt = n3, false;
    }), l2;
  }
  function a(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i2 = t2.onElement, n2 = t2.withCallback, s2 = t2.avoidDuplicate, l2 = void 0 === s2 || s2, a2 = t2.once, h2 = void 0 !== a2 && a2, d2 = t2.useCapture, c2 = void 0 !== d2 && d2, u2 = arguments.length > 2 ? arguments[2] : void 0, g2 = i2 || [];
    function v2(e3) {
      T(n2) && n2.call(u2, e3, this), h2 && v2.destroy();
    }
    return C(g2) && (g2 = document.querySelectorAll(g2)), v2.destroy = function() {
      o(g2, function(t3) {
        var i3 = r(t3, e2, v2);
        i3.found && i3.all.splice(i3.evt, 1), t3.removeEventListener && t3.removeEventListener(e2, v2, c2);
      });
    }, o(g2, function(t3) {
      var i3 = r(t3, e2, v2);
      (t3.addEventListener && l2 && !i3.found || !l2) && (t3.addEventListener(e2, v2, c2), i3.all.push({ eventName: e2, fn: v2 }));
    }), v2;
  }
  function h(e2, t2) {
    o(t2.split(" "), function(t3) {
      return e2.classList.add(t3);
    });
  }
  function d(e2, t2) {
    o(t2.split(" "), function(t3) {
      return e2.classList.remove(t3);
    });
  }
  function c(e2, t2) {
    return e2.classList.contains(t2);
  }
  function u(e2, t2) {
    for (; e2 !== document.body; ) {
      if (!(e2 = e2.parentElement))
        return false;
      if ("function" == typeof e2.matches ? e2.matches(t2) : e2.msMatchesSelector(t2))
        return e2;
    }
  }
  function g(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e2 || "" === t2)
      return false;
    if ("none" === t2)
      return T(i2) && i2(), false;
    var n2 = x(), s2 = t2.split(" ");
    o(s2, function(t3) {
      h(e2, "g" + t3);
    }), a(n2, { onElement: e2, avoidDuplicate: false, once: true, withCallback: function(e3, t3) {
      o(s2, function(e4) {
        d(t3, "g" + e4);
      }), T(i2) && i2();
    } });
  }
  function v(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    if ("" === t2)
      return e2.style.webkitTransform = "", e2.style.MozTransform = "", e2.style.msTransform = "", e2.style.OTransform = "", e2.style.transform = "", false;
    e2.style.webkitTransform = t2, e2.style.MozTransform = t2, e2.style.msTransform = t2, e2.style.OTransform = t2, e2.style.transform = t2;
  }
  function f(e2) {
    e2.style.display = "block";
  }
  function p(e2) {
    e2.style.display = "none";
  }
  function m(e2) {
    var t2 = document.createDocumentFragment(), i2 = document.createElement("div");
    for (i2.innerHTML = e2; i2.firstChild; )
      t2.appendChild(i2.firstChild);
    return t2;
  }
  function y() {
    return { width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight };
  }
  function x() {
    var e2, t2 = document.createElement("fakeelement"), i2 = { animation: "animationend", OAnimation: "oAnimationEnd", MozAnimation: "animationend", WebkitAnimation: "webkitAnimationEnd" };
    for (e2 in i2)
      if (void 0 !== t2.style[e2])
        return i2[e2];
  }
  function b(e2, t2, i2, n2) {
    if (e2())
      t2();
    else {
      var s2;
      i2 || (i2 = 100);
      var l2 = setInterval(function() {
        e2() && (clearInterval(l2), s2 && clearTimeout(s2), t2());
      }, i2);
      n2 && (s2 = setTimeout(function() {
        clearInterval(l2);
      }, n2));
    }
  }
  function S(e2, t2, i2) {
    if (I(e2))
      console.error("Inject assets error");
    else if (T(t2) && (i2 = t2, t2 = false), C(t2) && t2 in window)
      T(i2) && i2();
    else {
      var n2;
      if (-1 !== e2.indexOf(".css")) {
        if ((n2 = document.querySelectorAll('link[href="' + e2 + '"]')) && n2.length > 0)
          return void (T(i2) && i2());
        var s2 = document.getElementsByTagName("head")[0], l2 = s2.querySelectorAll('link[rel="stylesheet"]'), o2 = document.createElement("link");
        return o2.rel = "stylesheet", o2.type = "text/css", o2.href = e2, o2.media = "all", l2 ? s2.insertBefore(o2, l2[0]) : s2.appendChild(o2), void (T(i2) && i2());
      }
      if ((n2 = document.querySelectorAll('script[src="' + e2 + '"]')) && n2.length > 0) {
        if (T(i2)) {
          if (C(t2))
            return b(function() {
              return void 0 !== window[t2];
            }, function() {
              i2();
            }), false;
          i2();
        }
      } else {
        var r2 = document.createElement("script");
        r2.type = "text/javascript", r2.src = e2, r2.onload = function() {
          if (T(i2)) {
            if (C(t2))
              return b(function() {
                return void 0 !== window[t2];
              }, function() {
                i2();
              }), false;
            i2();
          }
        }, document.body.appendChild(r2);
      }
    }
  }
  function w() {
    return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
  }
  function T(e2) {
    return "function" == typeof e2;
  }
  function C(e2) {
    return "string" == typeof e2;
  }
  function k(e2) {
    return !(!e2 || !e2.nodeType || 1 != e2.nodeType);
  }
  function E(e2) {
    return Array.isArray(e2);
  }
  function A(e2) {
    return e2 && e2.length && isFinite(e2.length);
  }
  function L(t2) {
    return "object" === e(t2) && null != t2 && !T(t2) && !E(t2);
  }
  function I(e2) {
    return null == e2;
  }
  function O(e2, t2) {
    return null !== e2 && hasOwnProperty.call(e2, t2);
  }
  function P(e2) {
    if (L(e2)) {
      if (e2.keys)
        return e2.keys().length;
      var t2 = 0;
      for (var i2 in e2)
        O(e2, i2) && t2++;
      return t2;
    }
    return e2.length;
  }
  function M(e2) {
    return !isNaN(parseFloat(e2)) && isFinite(e2);
  }
  function z() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1, t2 = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
    if (!t2.length)
      return false;
    if (1 == t2.length)
      return t2[0];
    "string" == typeof e2 && (e2 = parseInt(e2));
    var i2 = [];
    o(t2, function(e3) {
      i2.push(e3.getAttribute("data-taborder"));
    });
    var n2 = Math.max.apply(Math, i2.map(function(e3) {
      return parseInt(e3);
    })), s2 = e2 < 0 ? 1 : e2 + 1;
    s2 > n2 && (s2 = "1");
    var l2 = i2.filter(function(e3) {
      return e3 >= parseInt(s2);
    }), r2 = l2.sort()[0];
    return document.querySelector('.gbtn[data-taborder="'.concat(r2, '"]'));
  }
  function X(e2) {
    if (e2.events.hasOwnProperty("keyboard"))
      return false;
    e2.events.keyboard = a("keydown", { onElement: window, withCallback: function(t2, i2) {
      var n2 = (t2 = t2 || window.event).keyCode;
      if (9 == n2) {
        var s2 = document.querySelector(".gbtn.focused");
        if (!s2) {
          var l2 = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
          if ("input" == l2 || "textarea" == l2 || "button" == l2)
            return;
        }
        t2.preventDefault();
        var o2 = document.querySelectorAll(".gbtn[data-taborder]");
        if (!o2 || o2.length <= 0)
          return;
        if (!s2) {
          var r2 = z();
          return void (r2 && (r2.focus(), h(r2, "focused")));
        }
        var a2 = z(s2.getAttribute("data-taborder"));
        d(s2, "focused"), a2 && (a2.focus(), h(a2, "focused"));
      }
      39 == n2 && e2.nextSlide(), 37 == n2 && e2.prevSlide(), 27 == n2 && e2.close();
    } });
  }
  function Y(e2) {
    return Math.sqrt(e2.x * e2.x + e2.y * e2.y);
  }
  function q(e2, t2) {
    var i2 = function(e3, t3) {
      var i3 = Y(e3) * Y(t3);
      if (0 === i3)
        return 0;
      var n2 = function(e4, t4) {
        return e4.x * t4.x + e4.y * t4.y;
      }(e3, t3) / i3;
      return n2 > 1 && (n2 = 1), Math.acos(n2);
    }(e2, t2);
    return function(e3, t3) {
      return e3.x * t3.y - t3.x * e3.y;
    }(e2, t2) > 0 && (i2 *= -1), 180 * i2 / Math.PI;
  }
  var N = function() {
    function e2(i2) {
      t(this, e2), this.handlers = [], this.el = i2;
    }
    return n(e2, [{ key: "add", value: function(e3) {
      this.handlers.push(e3);
    } }, { key: "del", value: function(e3) {
      e3 || (this.handlers = []);
      for (var t2 = this.handlers.length; t2 >= 0; t2--)
        this.handlers[t2] === e3 && this.handlers.splice(t2, 1);
    } }, { key: "dispatch", value: function() {
      for (var e3 = 0, t2 = this.handlers.length; e3 < t2; e3++) {
        var i2 = this.handlers[e3];
        "function" == typeof i2 && i2.apply(this.el, arguments);
      }
    } }]), e2;
  }();
  function D(e2, t2) {
    var i2 = new N(e2);
    return i2.add(t2), i2;
  }
  var _ = function() {
    function e2(i2, n2) {
      t(this, e2), this.element = "string" == typeof i2 ? document.querySelector(i2) : i2, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, false), this.element.addEventListener("touchmove", this.move, false), this.element.addEventListener("touchend", this.end, false), this.element.addEventListener("touchcancel", this.cancel, false), this.preV = { x: null, y: null }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = false;
      var s2 = function() {
      };
      this.rotate = D(this.element, n2.rotate || s2), this.touchStart = D(this.element, n2.touchStart || s2), this.multipointStart = D(this.element, n2.multipointStart || s2), this.multipointEnd = D(this.element, n2.multipointEnd || s2), this.pinch = D(this.element, n2.pinch || s2), this.swipe = D(this.element, n2.swipe || s2), this.tap = D(this.element, n2.tap || s2), this.doubleTap = D(this.element, n2.doubleTap || s2), this.longTap = D(this.element, n2.longTap || s2), this.singleTap = D(this.element, n2.singleTap || s2), this.pressMove = D(this.element, n2.pressMove || s2), this.twoFingerPressMove = D(this.element, n2.twoFingerPressMove || s2), this.touchMove = D(this.element, n2.touchMove || s2), this.touchEnd = D(this.element, n2.touchEnd || s2), this.touchCancel = D(this.element, n2.touchCancel || s2), this.translateContainer = this.element, this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = { x: null, y: null };
    }
    return n(e2, [{ key: "start", value: function(e3) {
      if (e3.touches) {
        if (e3.target && e3.target.nodeName && ["a", "button", "input"].indexOf(e3.target.nodeName.toLowerCase()) >= 0)
          console.log("ignore drag for this touched element", e3.target.nodeName.toLowerCase());
        else {
          this.now = Date.now(), this.x1 = e3.touches[0].pageX, this.y1 = e3.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e3, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
          var t2 = this.preV;
          if (e3.touches.length > 1) {
            this._cancelLongTap(), this._cancelSingleTap();
            var i2 = { x: e3.touches[1].pageX - this.x1, y: e3.touches[1].pageY - this.y1 };
            t2.x = i2.x, t2.y = i2.y, this.pinchStartLen = Y(t2), this.multipointStart.dispatch(e3, this.element);
          }
          this._preventTap = false, this.longTapTimeout = setTimeout(function() {
            this.longTap.dispatch(e3, this.element), this._preventTap = true;
          }.bind(this), 750);
        }
      }
    } }, { key: "move", value: function(e3) {
      if (e3.touches) {
        var t2 = this.preV, i2 = e3.touches.length, n2 = e3.touches[0].pageX, s2 = e3.touches[0].pageY;
        if (this.isDoubleTap = false, i2 > 1) {
          var l2 = e3.touches[1].pageX, o2 = e3.touches[1].pageY, r2 = { x: e3.touches[1].pageX - n2, y: e3.touches[1].pageY - s2 };
          null !== t2.x && (this.pinchStartLen > 0 && (e3.zoom = Y(r2) / this.pinchStartLen, this.pinch.dispatch(e3, this.element)), e3.angle = q(r2, t2), this.rotate.dispatch(e3, this.element)), t2.x = r2.x, t2.y = r2.y, null !== this.x2 && null !== this.sx2 ? (e3.deltaX = (n2 - this.x2 + l2 - this.sx2) / 2, e3.deltaY = (s2 - this.y2 + o2 - this.sy2) / 2) : (e3.deltaX = 0, e3.deltaY = 0), this.twoFingerPressMove.dispatch(e3, this.element), this.sx2 = l2, this.sy2 = o2;
        } else {
          if (null !== this.x2) {
            e3.deltaX = n2 - this.x2, e3.deltaY = s2 - this.y2;
            var a2 = Math.abs(this.x1 - this.x2), h2 = Math.abs(this.y1 - this.y2);
            (a2 > 10 || h2 > 10) && (this._preventTap = true);
          } else
            e3.deltaX = 0, e3.deltaY = 0;
          this.pressMove.dispatch(e3, this.element);
        }
        this.touchMove.dispatch(e3, this.element), this._cancelLongTap(), this.x2 = n2, this.y2 = s2, i2 > 1 && e3.preventDefault();
      }
    } }, { key: "end", value: function(e3) {
      if (e3.changedTouches) {
        this._cancelLongTap();
        var t2 = this;
        e3.touches.length < 2 && (this.multipointEnd.dispatch(e3, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e3.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function() {
          t2.swipe.dispatch(e3, t2.element);
        }, 0)) : (this.tapTimeout = setTimeout(function() {
          t2._preventTap || t2.tap.dispatch(e3, t2.element), t2.isDoubleTap && (t2.doubleTap.dispatch(e3, t2.element), t2.isDoubleTap = false);
        }, 0), t2.isDoubleTap || (t2.singleTapTimeout = setTimeout(function() {
          t2.singleTap.dispatch(e3, t2.element);
        }, 250))), this.touchEnd.dispatch(e3, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null;
      }
    } }, { key: "cancelAll", value: function() {
      this._preventTap = true, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout);
    } }, { key: "cancel", value: function(e3) {
      this.cancelAll(), this.touchCancel.dispatch(e3, this.element);
    } }, { key: "_cancelLongTap", value: function() {
      clearTimeout(this.longTapTimeout);
    } }, { key: "_cancelSingleTap", value: function() {
      clearTimeout(this.singleTapTimeout);
    } }, { key: "_swipeDirection", value: function(e3, t2, i2, n2) {
      return Math.abs(e3 - t2) >= Math.abs(i2 - n2) ? e3 - t2 > 0 ? "Left" : "Right" : i2 - n2 > 0 ? "Up" : "Down";
    } }, { key: "on", value: function(e3, t2) {
      this[e3] && this[e3].add(t2);
    } }, { key: "off", value: function(e3, t2) {
      this[e3] && this[e3].del(t2);
    } }, { key: "destroy", value: function() {
      return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null;
    } }]), e2;
  }();
  function W(e2) {
    var t2 = function() {
      var e3, t3 = document.createElement("fakeelement"), i3 = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
      for (e3 in i3)
        if (void 0 !== t3.style[e3])
          return i3[e3];
    }(), i2 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n2 = c(e2, "gslide-media") ? e2 : e2.querySelector(".gslide-media"), s2 = u(n2, ".ginner-container"), l2 = e2.querySelector(".gslide-description");
    i2 > 769 && (n2 = s2), h(n2, "greset"), v(n2, "translate3d(0, 0, 0)"), a(t2, { onElement: n2, once: true, withCallback: function(e3, t3) {
      d(n2, "greset");
    } }), n2.style.opacity = "", l2 && (l2.style.opacity = "");
  }
  function B(e2) {
    if (e2.events.hasOwnProperty("touch"))
      return false;
    var t2, i2, n2, s2 = y(), l2 = s2.width, o2 = s2.height, r2 = false, a2 = null, g2 = null, f2 = null, p2 = false, m2 = 1, x2 = 1, b2 = false, S2 = false, w2 = null, T2 = null, C2 = null, k2 = null, E2 = 0, A2 = 0, L2 = false, I2 = false, O2 = {}, P2 = {}, M2 = 0, z2 = 0, X2 = document.getElementById("glightbox-slider"), Y2 = document.querySelector(".goverlay"), q2 = new _(X2, { touchStart: function(t3) {
      if (r2 = true, (c(t3.targetTouches[0].target, "ginner-container") || u(t3.targetTouches[0].target, ".gslide-desc") || "a" == t3.targetTouches[0].target.nodeName.toLowerCase()) && (r2 = false), u(t3.targetTouches[0].target, ".gslide-inline") && !c(t3.targetTouches[0].target.parentNode, "gslide-inline") && (r2 = false), r2) {
        if (P2 = t3.targetTouches[0], O2.pageX = t3.targetTouches[0].pageX, O2.pageY = t3.targetTouches[0].pageY, M2 = t3.targetTouches[0].clientX, z2 = t3.targetTouches[0].clientY, a2 = e2.activeSlide, g2 = a2.querySelector(".gslide-media"), n2 = a2.querySelector(".gslide-inline"), f2 = null, c(g2, "gslide-image") && (f2 = g2.querySelector("img")), (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 769 && (g2 = a2.querySelector(".ginner-container")), d(Y2, "greset"), t3.pageX > 20 && t3.pageX < window.innerWidth - 20)
          return;
        t3.preventDefault();
      }
    }, touchMove: function(s3) {
      if (r2 && (P2 = s3.targetTouches[0], !b2 && !S2)) {
        if (n2 && n2.offsetHeight > o2) {
          var a3 = O2.pageX - P2.pageX;
          if (Math.abs(a3) <= 13)
            return false;
        }
        p2 = true;
        var h2, d2 = s3.targetTouches[0].clientX, c2 = s3.targetTouches[0].clientY, u2 = M2 - d2, m3 = z2 - c2;
        if (Math.abs(u2) > Math.abs(m3) ? (L2 = false, I2 = true) : (I2 = false, L2 = true), t2 = P2.pageX - O2.pageX, E2 = 100 * t2 / l2, i2 = P2.pageY - O2.pageY, A2 = 100 * i2 / o2, L2 && f2 && (h2 = 1 - Math.abs(i2) / o2, Y2.style.opacity = h2, e2.settings.touchFollowAxis && (E2 = 0)), I2 && (h2 = 1 - Math.abs(t2) / l2, g2.style.opacity = h2, e2.settings.touchFollowAxis && (A2 = 0)), !f2)
          return v(g2, "translate3d(".concat(E2, "%, 0, 0)"));
        v(g2, "translate3d(".concat(E2, "%, ").concat(A2, "%, 0)"));
      }
    }, touchEnd: function() {
      if (r2) {
        if (p2 = false, S2 || b2)
          return C2 = w2, void (k2 = T2);
        var t3 = Math.abs(parseInt(A2)), i3 = Math.abs(parseInt(E2));
        if (!(t3 > 29 && f2))
          return t3 < 29 && i3 < 25 ? (h(Y2, "greset"), Y2.style.opacity = 1, W(g2)) : void 0;
        e2.close();
      }
    }, multipointEnd: function() {
      setTimeout(function() {
        b2 = false;
      }, 50);
    }, multipointStart: function() {
      b2 = true, m2 = x2 || 1;
    }, pinch: function(e3) {
      if (!f2 || p2)
        return false;
      b2 = true, f2.scaleX = f2.scaleY = m2 * e3.zoom;
      var t3 = m2 * e3.zoom;
      if (S2 = true, t3 <= 1)
        return S2 = false, t3 = 1, k2 = null, C2 = null, w2 = null, T2 = null, void f2.setAttribute("style", "");
      t3 > 4.5 && (t3 = 4.5), f2.style.transform = "scale3d(".concat(t3, ", ").concat(t3, ", 1)"), x2 = t3;
    }, pressMove: function(e3) {
      if (S2 && !b2) {
        var t3 = P2.pageX - O2.pageX, i3 = P2.pageY - O2.pageY;
        C2 && (t3 += C2), k2 && (i3 += k2), w2 = t3, T2 = i3;
        var n3 = "translate3d(".concat(t3, "px, ").concat(i3, "px, 0)");
        x2 && (n3 += " scale3d(".concat(x2, ", ").concat(x2, ", 1)")), v(f2, n3);
      }
    }, swipe: function(t3) {
      if (!S2)
        if (b2)
          b2 = false;
        else {
          if ("Left" == t3.direction) {
            if (e2.index == e2.elements.length - 1)
              return W(g2);
            e2.nextSlide();
          }
          if ("Right" == t3.direction) {
            if (0 == e2.index)
              return W(g2);
            e2.prevSlide();
          }
        }
    } });
    e2.events.touch = q2;
  }
  var H = function() {
    function e2(i2, n2) {
      var s2 = this, l2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if (t(this, e2), this.img = i2, this.slide = n2, this.onclose = l2, this.img.setZoomEvents)
        return false;
      this.active = false, this.zoomedIn = false, this.dragging = false, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", function(e3) {
        return s2.dragStart(e3);
      }, false), this.img.addEventListener("mouseup", function(e3) {
        return s2.dragEnd(e3);
      }, false), this.img.addEventListener("mousemove", function(e3) {
        return s2.drag(e3);
      }, false), this.img.addEventListener("click", function(e3) {
        return s2.slide.classList.contains("dragging-nav") ? (s2.zoomOut(), false) : s2.zoomedIn ? void (s2.zoomedIn && !s2.dragging && s2.zoomOut()) : s2.zoomIn();
      }, false), this.img.setZoomEvents = true;
    }
    return n(e2, [{ key: "zoomIn", value: function() {
      var e3 = this.widowWidth();
      if (!(this.zoomedIn || e3 <= 768)) {
        var t2 = this.img;
        if (t2.setAttribute("data-style", t2.getAttribute("style")), t2.style.maxWidth = t2.naturalWidth + "px", t2.style.maxHeight = t2.naturalHeight + "px", t2.naturalWidth > e3) {
          var i2 = e3 / 2 - t2.naturalWidth / 2;
          this.setTranslate(this.img.parentNode, i2, 0);
        }
        this.slide.classList.add("zoomed"), this.zoomedIn = true;
      }
    } }, { key: "zoomOut", value: function() {
      this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = false, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose();
    } }, { key: "dragStart", value: function(e3) {
      e3.preventDefault(), this.zoomedIn ? ("touchstart" === e3.type ? (this.initialX = e3.touches[0].clientX - this.xOffset, this.initialY = e3.touches[0].clientY - this.yOffset) : (this.initialX = e3.clientX - this.xOffset, this.initialY = e3.clientY - this.yOffset), e3.target === this.img && (this.active = true, this.img.classList.add("dragging"))) : this.active = false;
    } }, { key: "dragEnd", value: function(e3) {
      var t2 = this;
      e3.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = false, setTimeout(function() {
        t2.dragging = false, t2.img.isDragging = false, t2.img.classList.remove("dragging");
      }, 100);
    } }, { key: "drag", value: function(e3) {
      this.active && (e3.preventDefault(), "touchmove" === e3.type ? (this.currentX = e3.touches[0].clientX - this.initialX, this.currentY = e3.touches[0].clientY - this.initialY) : (this.currentX = e3.clientX - this.initialX, this.currentY = e3.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = true, this.dragging = true, this.setTranslate(this.img, this.currentX, this.currentY));
    } }, { key: "onMove", value: function(e3) {
      if (this.zoomedIn) {
        var t2 = e3.clientX - this.img.naturalWidth / 2, i2 = e3.clientY - this.img.naturalHeight / 2;
        this.setTranslate(this.img, t2, i2);
      }
    } }, { key: "setTranslate", value: function(e3, t2, i2) {
      e3.style.transform = "translate3d(" + t2 + "px, " + i2 + "px, 0)";
    } }, { key: "widowWidth", value: function() {
      return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    } }]), e2;
  }(), V = function() {
    function e2() {
      var i2 = this, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t(this, e2);
      var s2 = n2.dragEl, l2 = n2.toleranceX, o2 = void 0 === l2 ? 40 : l2, r2 = n2.toleranceY, a2 = void 0 === r2 ? 65 : r2, h2 = n2.slide, d2 = void 0 === h2 ? null : h2, c2 = n2.instance, u2 = void 0 === c2 ? null : c2;
      this.el = s2, this.active = false, this.dragging = false, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = o2, this.toleranceY = a2, this.toleranceReached = false, this.dragContainer = this.el, this.slide = d2, this.instance = u2, this.el.addEventListener("mousedown", function(e3) {
        return i2.dragStart(e3);
      }, false), this.el.addEventListener("mouseup", function(e3) {
        return i2.dragEnd(e3);
      }, false), this.el.addEventListener("mousemove", function(e3) {
        return i2.drag(e3);
      }, false);
    }
    return n(e2, [{ key: "dragStart", value: function(e3) {
      if (this.slide.classList.contains("zoomed"))
        this.active = false;
      else {
        "touchstart" === e3.type ? (this.initialX = e3.touches[0].clientX - this.xOffset, this.initialY = e3.touches[0].clientY - this.yOffset) : (this.initialX = e3.clientX - this.xOffset, this.initialY = e3.clientY - this.yOffset);
        var t2 = e3.target.nodeName.toLowerCase();
        e3.target.classList.contains("nodrag") || u(e3.target, ".nodrag") || -1 !== ["input", "select", "textarea", "button", "a"].indexOf(t2) ? this.active = false : (e3.preventDefault(), (e3.target === this.el || "img" !== t2 && u(e3.target, ".gslide-inline")) && (this.active = true, this.el.classList.add("dragging"), this.dragContainer = u(e3.target, ".ginner-container")));
      }
    } }, { key: "dragEnd", value: function(e3) {
      var t2 = this;
      e3 && e3.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = false, this.doSlideChange && (this.instance.preventOutsideClick = true, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, true), setTimeout(function() {
        t2.instance.preventOutsideClick = false, t2.toleranceReached = false, t2.lastDirection = null, t2.dragging = false, t2.el.isDragging = false, t2.el.classList.remove("dragging"), t2.slide.classList.remove("dragging-nav"), t2.dragContainer.style.transform = "", t2.dragContainer.style.transition = "";
      }, 100);
    } }, { key: "drag", value: function(e3) {
      if (this.active) {
        e3.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e3.type ? (this.currentX = e3.touches[0].clientX - this.initialX, this.currentY = e3.touches[0].clientY - this.initialY) : (this.currentX = e3.clientX - this.initialX, this.currentY = e3.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = true, this.dragging = true, this.doSlideChange = false, this.doSlideClose = false;
        var t2 = Math.abs(this.currentX), i2 = Math.abs(this.currentY);
        if (t2 > 0 && t2 >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
          this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
          var n2 = this.shouldChange();
          if (!this.instance.settings.dragAutoSnap && n2 && (this.doSlideChange = n2), this.instance.settings.dragAutoSnap && n2)
            return this.instance.preventOutsideClick = true, this.toleranceReached = true, this.active = false, this.instance.preventOutsideClick = true, this.dragEnd(null), "right" == n2 && this.instance.prevSlide(), void ("left" == n2 && this.instance.nextSlide());
        }
        if (this.toleranceY > 0 && i2 > 0 && i2 >= t2 && (!this.lastDirection || "y" == this.lastDirection)) {
          this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
          var s2 = this.shouldClose();
          return !this.instance.settings.dragAutoSnap && s2 && (this.doSlideClose = true), void (this.instance.settings.dragAutoSnap && s2 && this.instance.close());
        }
      }
    } }, { key: "shouldChange", value: function() {
      var e3 = false;
      if (Math.abs(this.currentX) >= this.toleranceX) {
        var t2 = this.currentX > 0 ? "right" : "left";
        ("left" == t2 && this.slide !== this.slide.parentNode.lastChild || "right" == t2 && this.slide !== this.slide.parentNode.firstChild) && (e3 = t2);
      }
      return e3;
    } }, { key: "shouldClose", value: function() {
      var e3 = false;
      return Math.abs(this.currentY) >= this.toleranceY && (e3 = true), e3;
    } }, { key: "setTranslate", value: function(e3, t2, i2) {
      var n2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      e3.style.transition = n2 ? "all .2s ease" : "", e3.style.transform = "translate3d(".concat(t2, "px, ").concat(i2, "px, 0)");
    } }]), e2;
  }();
  function j(e2, t2, i2, n2) {
    var s2 = e2.querySelector(".gslide-media"), l2 = new Image(), o2 = "gSlideTitle_" + i2, r2 = "gSlideDesc_" + i2;
    l2.addEventListener("load", function() {
      T(n2) && n2();
    }, false), l2.src = t2.href, "" != t2.sizes && "" != t2.srcset && (l2.sizes = t2.sizes, l2.srcset = t2.srcset), l2.alt = "", I(t2.alt) || "" === t2.alt || (l2.alt = t2.alt), "" !== t2.title && l2.setAttribute("aria-labelledby", o2), "" !== t2.description && l2.setAttribute("aria-describedby", r2), t2.hasOwnProperty("_hasCustomWidth") && t2._hasCustomWidth && (l2.style.width = t2.width), t2.hasOwnProperty("_hasCustomHeight") && t2._hasCustomHeight && (l2.style.height = t2.height), s2.insertBefore(l2, s2.firstChild);
  }
  function F(e2, t2, i2, n2) {
    var s2 = this, l2 = e2.querySelector(".ginner-container"), o2 = "gvideo" + i2, r2 = e2.querySelector(".gslide-media"), a2 = this.getAllPlayers();
    h(l2, "gvideo-container"), r2.insertBefore(m('<div class="gvideo-wrapper"></div>'), r2.firstChild);
    var d2 = e2.querySelector(".gvideo-wrapper");
    S(this.settings.plyr.css, "Plyr");
    var c2 = t2.href, u2 = null == t2 ? void 0 : t2.videoProvider, g2 = false;
    r2.style.maxWidth = t2.width, S(this.settings.plyr.js, "Plyr", function() {
      if (!u2 && c2.match(/vimeo\.com\/([0-9]*)/) && (u2 = "vimeo"), !u2 && (c2.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || c2.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || c2.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) && (u2 = "youtube"), "local" === u2 || !u2) {
        u2 = "local";
        var l3 = '<video id="' + o2 + '" ';
        l3 += 'style="background:#000; max-width: '.concat(t2.width, ';" '), l3 += 'preload="metadata" ', l3 += 'x-webkit-airplay="allow" ', l3 += "playsinline ", l3 += "controls ", l3 += 'class="gvideo-local">', l3 += '<source src="'.concat(c2, '">'), g2 = m(l3 += "</video>");
      }
      var r3 = g2 || m('<div id="'.concat(o2, '" data-plyr-provider="').concat(u2, '" data-plyr-embed-id="').concat(c2, '"></div>'));
      h(d2, "".concat(u2, "-video gvideo")), d2.appendChild(r3), d2.setAttribute("data-id", o2), d2.setAttribute("data-index", i2);
      var v2 = O(s2.settings.plyr, "config") ? s2.settings.plyr.config : {}, f2 = new Plyr("#" + o2, v2);
      f2.on("ready", function(e3) {
        a2[o2] = e3.detail.plyr, T(n2) && n2();
      }), b(function() {
        return e2.querySelector("iframe") && "true" == e2.querySelector("iframe").dataset.ready;
      }, function() {
        s2.resize(e2);
      }), f2.on("enterfullscreen", R), f2.on("exitfullscreen", R);
    });
  }
  function R(e2) {
    var t2 = u(e2.target, ".gslide-media");
    "enterfullscreen" === e2.type && h(t2, "fullscreen"), "exitfullscreen" === e2.type && d(t2, "fullscreen");
  }
  function G(e2, t2, i2, n2) {
    var s2, l2 = this, o2 = e2.querySelector(".gslide-media"), r2 = !(!O(t2, "href") || !t2.href) && t2.href.split("#").pop().trim(), d2 = !(!O(t2, "content") || !t2.content) && t2.content;
    if (d2 && (C(d2) && (s2 = m('<div class="ginlined-content">'.concat(d2, "</div>"))), k(d2))) {
      "none" == d2.style.display && (d2.style.display = "block");
      var c2 = document.createElement("div");
      c2.className = "ginlined-content", c2.appendChild(d2), s2 = c2;
    }
    if (r2) {
      var u2 = document.getElementById(r2);
      if (!u2)
        return false;
      var g2 = u2.cloneNode(true);
      g2.style.height = t2.height, g2.style.maxWidth = t2.width, h(g2, "ginlined-content"), s2 = g2;
    }
    if (!s2)
      return console.error("Unable to append inline slide content", t2), false;
    o2.style.height = t2.height, o2.style.width = t2.width, o2.appendChild(s2), this.events["inlineclose" + r2] = a("click", { onElement: o2.querySelectorAll(".gtrigger-close"), withCallback: function(e3) {
      e3.preventDefault(), l2.close();
    } }), T(n2) && n2();
  }
  function Z(e2, t2, i2, n2) {
    var s2 = e2.querySelector(".gslide-media"), l2 = function(e3) {
      var t3 = e3.url, i3 = e3.allow, n3 = e3.callback, s3 = e3.appendTo, l3 = document.createElement("iframe");
      return l3.className = "vimeo-video gvideo", l3.src = t3, l3.style.width = "100%", l3.style.height = "100%", i3 && l3.setAttribute("allow", i3), l3.onload = function() {
        l3.onload = null, h(l3, "node-ready"), T(n3) && n3();
      }, s3 && s3.appendChild(l3), l3;
    }({ url: t2.href, callback: n2 });
    s2.parentNode.style.maxWidth = t2.width, s2.parentNode.style.height = t2.height, s2.appendChild(l2);
  }
  var U = function() {
    function e2() {
      var i2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t(this, e2), this.defaults = { href: "", sizes: "", srcset: "", title: "", type: "", videoProvider: "", description: "", alt: "", descPosition: "bottom", effect: "", width: "", height: "", content: false, zoomable: true, draggable: true }, L(i2) && (this.defaults = l(this.defaults, i2));
    }
    return n(e2, [{ key: "sourceType", value: function(e3) {
      var t2 = e3;
      if (null !== (e3 = e3.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/))
        return "image";
      if (e3.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e3.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e3.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/))
        return "video";
      if (e3.match(/vimeo\.com\/([0-9]*)/))
        return "video";
      if (null !== e3.match(/\.(mp4|ogg|webm|mov)/))
        return "video";
      if (null !== e3.match(/\.(mp3|wav|wma|aac|ogg)/))
        return "audio";
      if (e3.indexOf("#") > -1 && "" !== t2.split("#").pop().trim())
        return "inline";
      return e3.indexOf("goajax=true") > -1 ? "ajax" : "external";
    } }, { key: "parseConfig", value: function(e3, t2) {
      var i2 = this, n2 = l({ descPosition: t2.descPosition }, this.defaults);
      if (L(e3) && !k(e3)) {
        O(e3, "type") || (O(e3, "content") && e3.content ? e3.type = "inline" : O(e3, "href") && (e3.type = this.sourceType(e3.href)));
        var s2 = l(n2, e3);
        return this.setSize(s2, t2), s2;
      }
      var r2 = "", a2 = e3.getAttribute("data-glightbox"), h2 = e3.nodeName.toLowerCase();
      if ("a" === h2 && (r2 = e3.href), "img" === h2 && (r2 = e3.src, n2.alt = e3.alt), n2.href = r2, o(n2, function(s3, l2) {
        O(t2, l2) && "width" !== l2 && (n2[l2] = t2[l2]);
        var o2 = e3.dataset[l2];
        I(o2) || (n2[l2] = i2.sanitizeValue(o2));
      }), n2.content && (n2.type = "inline"), !n2.type && r2 && (n2.type = this.sourceType(r2)), I(a2)) {
        if (!n2.title && "a" == h2) {
          var d2 = e3.title;
          I(d2) || "" === d2 || (n2.title = d2);
        }
        if (!n2.title && "img" == h2) {
          var c2 = e3.alt;
          I(c2) || "" === c2 || (n2.title = c2);
        }
      } else {
        var u2 = [];
        o(n2, function(e4, t3) {
          u2.push(";\\s?" + t3);
        }), u2 = u2.join("\\s?:|"), "" !== a2.trim() && o(n2, function(e4, t3) {
          var s3 = a2, l2 = new RegExp("s?" + t3 + "s?:s?(.*?)(" + u2 + "s?:|$)"), o2 = s3.match(l2);
          if (o2 && o2.length && o2[1]) {
            var r3 = o2[1].trim().replace(/;\s*$/, "");
            n2[t3] = i2.sanitizeValue(r3);
          }
        });
      }
      if (n2.description && "." === n2.description.substring(0, 1)) {
        var g2;
        try {
          g2 = document.querySelector(n2.description).innerHTML;
        } catch (e4) {
          if (!(e4 instanceof DOMException))
            throw e4;
        }
        g2 && (n2.description = g2);
      }
      if (!n2.description) {
        var v2 = e3.querySelector(".glightbox-desc");
        v2 && (n2.description = v2.innerHTML);
      }
      return this.setSize(n2, t2, e3), this.slideConfig = n2, n2;
    } }, { key: "setSize", value: function(e3, t2) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n2 = "video" == e3.type ? this.checkSize(t2.videosWidth) : this.checkSize(t2.width), s2 = this.checkSize(t2.height);
      return e3.width = O(e3, "width") && "" !== e3.width ? this.checkSize(e3.width) : n2, e3.height = O(e3, "height") && "" !== e3.height ? this.checkSize(e3.height) : s2, i2 && "image" == e3.type && (e3._hasCustomWidth = !!i2.dataset.width, e3._hasCustomHeight = !!i2.dataset.height), e3;
    } }, { key: "checkSize", value: function(e3) {
      return M(e3) ? "".concat(e3, "px") : e3;
    } }, { key: "sanitizeValue", value: function(e3) {
      return "true" !== e3 && "false" !== e3 ? e3 : "true" === e3;
    } }]), e2;
  }(), $ = function() {
    function e2(i2, n2, s2) {
      t(this, e2), this.element = i2, this.instance = n2, this.index = s2;
    }
    return n(e2, [{ key: "setContent", value: function() {
      var e3 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (c(t2, "loaded"))
        return false;
      var n2 = this.instance.settings, s2 = this.slideConfig, l2 = w();
      T(n2.beforeSlideLoad) && n2.beforeSlideLoad({ index: this.index, slide: t2, player: false });
      var o2 = s2.type, r2 = s2.descPosition, a2 = t2.querySelector(".gslide-media"), d2 = t2.querySelector(".gslide-title"), u2 = t2.querySelector(".gslide-desc"), g2 = t2.querySelector(".gdesc-inner"), v2 = i2, f2 = "gSlideTitle_" + this.index, p2 = "gSlideDesc_" + this.index;
      if (T(n2.afterSlideLoad) && (v2 = function() {
        T(i2) && i2(), n2.afterSlideLoad({ index: e3.index, slide: t2, player: e3.instance.getSlidePlayerInstance(e3.index) });
      }), "" == s2.title && "" == s2.description ? g2 && g2.parentNode.parentNode.removeChild(g2.parentNode) : (d2 && "" !== s2.title ? (d2.id = f2, d2.innerHTML = s2.title) : d2.parentNode.removeChild(d2), u2 && "" !== s2.description ? (u2.id = p2, l2 && n2.moreLength > 0 ? (s2.smallDescription = this.slideShortDesc(s2.description, n2.moreLength, n2.moreText), u2.innerHTML = s2.smallDescription, this.descriptionEvents(u2, s2)) : u2.innerHTML = s2.description) : u2.parentNode.removeChild(u2), h(a2.parentNode, "desc-".concat(r2)), h(g2.parentNode, "description-".concat(r2))), h(a2, "gslide-".concat(o2)), h(t2, "loaded"), "video" !== o2) {
        if ("external" !== o2)
          return "inline" === o2 ? (G.apply(this.instance, [t2, s2, this.index, v2]), void (s2.draggable && new V({ dragEl: t2.querySelector(".gslide-inline"), toleranceX: n2.dragToleranceX, toleranceY: n2.dragToleranceY, slide: t2, instance: this.instance }))) : void ("image" !== o2 ? T(v2) && v2() : j(t2, s2, this.index, function() {
            var i3 = t2.querySelector("img");
            s2.draggable && new V({ dragEl: i3, toleranceX: n2.dragToleranceX, toleranceY: n2.dragToleranceY, slide: t2, instance: e3.instance }), s2.zoomable && i3.naturalWidth > i3.offsetWidth && (h(i3, "zoomable"), new H(i3, t2, function() {
              e3.instance.resize();
            })), T(v2) && v2();
          }));
        Z.apply(this, [t2, s2, this.index, v2]);
      } else
        F.apply(this.instance, [t2, s2, this.index, v2]);
    } }, { key: "slideShortDesc", value: function(e3) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50, i2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n2 = document.createElement("div");
      n2.innerHTML = e3;
      var s2 = n2.innerText, l2 = i2;
      if ((e3 = s2.trim()).length <= t2)
        return e3;
      var o2 = e3.substr(0, t2 - 1);
      return l2 ? (n2 = null, o2 + '... <a href="#" class="desc-more">' + i2 + "</a>") : o2;
    } }, { key: "descriptionEvents", value: function(e3, t2) {
      var i2 = this, n2 = e3.querySelector(".desc-more");
      if (!n2)
        return false;
      a("click", { onElement: n2, withCallback: function(e4, n3) {
        e4.preventDefault();
        var s2 = document.body, l2 = u(n3, ".gslide-desc");
        if (!l2)
          return false;
        l2.innerHTML = t2.description, h(s2, "gdesc-open");
        var o2 = a("click", { onElement: [s2, u(l2, ".gslide-description")], withCallback: function(e5, n4) {
          "a" !== e5.target.nodeName.toLowerCase() && (d(s2, "gdesc-open"), h(s2, "gdesc-closed"), l2.innerHTML = t2.smallDescription, i2.descriptionEvents(l2, t2), setTimeout(function() {
            d(s2, "gdesc-closed");
          }, 400), o2.destroy());
        } });
      } });
    } }, { key: "create", value: function() {
      return m(this.instance.settings.slideHTML);
    } }, { key: "getConfig", value: function() {
      k(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
      var e3 = new U(this.instance.settings.slideExtraAttributes);
      return this.slideConfig = e3.parseConfig(this.element, this.instance.settings), this.slideConfig;
    } }]), e2;
  }(), J = w(), K = null !== w() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints, Q = document.getElementsByTagName("html")[0], ee = { selector: ".glightbox", elements: null, skin: "clean", theme: "clean", closeButton: true, startAt: null, autoplayVideos: true, autofocusVideos: true, descPosition: "bottom", width: "900px", height: "506px", videosWidth: "960px", beforeSlideChange: null, afterSlideChange: null, beforeSlideLoad: null, afterSlideLoad: null, slideInserted: null, slideRemoved: null, slideExtraAttributes: null, onOpen: null, onClose: null, loop: false, zoomable: true, draggable: true, dragAutoSnap: false, dragToleranceX: 40, dragToleranceY: 65, preload: true, oneSlidePerOpen: false, touchNavigation: true, touchFollowAxis: true, keyboardNavigation: true, closeOnOutsideClick: true, plugins: false, plyr: { css: "https://cdn.plyr.io/3.6.12/plyr.css", js: "https://cdn.plyr.io/3.6.12/plyr.js", config: { ratio: "16:9", fullscreen: { enabled: true, iosNative: true }, youtube: { noCookie: true, rel: 0, showinfo: 0, iv_load_policy: 3 }, vimeo: { byline: false, portrait: false, title: false, transparent: false } } }, openEffect: "zoom", closeEffect: "zoom", slideEffect: "slide", moreText: "See more", moreLength: 60, cssEfects: { fade: { in: "fadeIn", out: "fadeOut" }, zoom: { in: "zoomIn", out: "zoomOut" }, slide: { in: "slideInRight", out: "slideOutLeft" }, slideBack: { in: "slideInLeft", out: "slideOutRight" }, none: { in: "none", out: "none" } }, svg: { close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>', next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>', prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>' }, slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>', lightboxHTML: '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>' }, te = function() {
    function e2() {
      var i2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t(this, e2), this.customOptions = i2, this.settings = l(ee, i2), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = false;
    }
    return n(e2, [{ key: "init", value: function() {
      var e3 = this, t2 = this.getSelector();
      t2 && (this.baseEvents = a("click", { onElement: t2, withCallback: function(t3, i2) {
        t3.preventDefault(), e3.open(i2);
      } })), this.elements = this.getElements();
    } }, { key: "open", value: function() {
      var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (0 === this.elements.length)
        return false;
      this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
      var i2 = M(t2) ? t2 : this.settings.startAt;
      if (k(e3)) {
        var n2 = e3.getAttribute("data-gallery");
        n2 && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, n2)), I(i2) && (i2 = this.getElementIndex(e3)) < 0 && (i2 = 0);
      }
      M(i2) || (i2 = 0), this.build(), g(this.overlay, "none" === this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
      var s2 = document.body, l2 = window.innerWidth - document.documentElement.clientWidth;
      if (l2 > 0) {
        var o2 = document.createElement("style");
        o2.type = "text/css", o2.className = "gcss-styles", o2.innerText = ".gscrollbar-fixer {margin-right: ".concat(l2, "px}"), document.head.appendChild(o2), h(s2, "gscrollbar-fixer");
      }
      h(s2, "glightbox-open"), h(Q, "glightbox-open"), J && (h(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(i2, true), 1 === this.elements.length ? (h(this.prevButton, "glightbox-button-hidden"), h(this.nextButton, "glightbox-button-hidden")) : (d(this.prevButton, "glightbox-button-hidden"), d(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = true, this.trigger("open"), T(this.settings.onOpen) && this.settings.onOpen(), K && this.settings.touchNavigation && B(this), this.settings.keyboardNavigation && X(this);
    } }, { key: "openAt", value: function() {
      var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      this.open(null, e3);
    } }, { key: "showSlide", value: function() {
      var e3 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      f(this.loader), this.index = parseInt(t2);
      var n2 = this.slidesContainer.querySelector(".current");
      n2 && d(n2, "current"), this.slideAnimateOut();
      var s2 = this.slidesContainer.querySelectorAll(".gslide")[t2];
      if (c(s2, "loaded"))
        this.slideAnimateIn(s2, i2), p(this.loader);
      else {
        f(this.loader);
        var l2 = this.elements[t2], o2 = { index: this.index, slide: s2, slideNode: s2, slideConfig: l2.slideConfig, slideIndex: this.index, trigger: l2.node, player: null };
        this.trigger("slide_before_load", o2), l2.instance.setContent(s2, function() {
          p(e3.loader), e3.resize(), e3.slideAnimateIn(s2, i2), e3.trigger("slide_after_load", o2);
        });
      }
      this.slideDescription = s2.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && c(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t2 + 1), this.preloadSlide(t2 - 1)), this.updateNavigationClasses(), this.activeSlide = s2;
    } }, { key: "preloadSlide", value: function(e3) {
      var t2 = this;
      if (e3 < 0 || e3 > this.elements.length - 1)
        return false;
      if (I(this.elements[e3]))
        return false;
      var i2 = this.slidesContainer.querySelectorAll(".gslide")[e3];
      if (c(i2, "loaded"))
        return false;
      var n2 = this.elements[e3], s2 = n2.type, l2 = { index: e3, slide: i2, slideNode: i2, slideConfig: n2.slideConfig, slideIndex: e3, trigger: n2.node, player: null };
      this.trigger("slide_before_load", l2), "video" === s2 || "external" === s2 ? setTimeout(function() {
        n2.instance.setContent(i2, function() {
          t2.trigger("slide_after_load", l2);
        });
      }, 200) : n2.instance.setContent(i2, function() {
        t2.trigger("slide_after_load", l2);
      });
    } }, { key: "prevSlide", value: function() {
      this.goToSlide(this.index - 1);
    } }, { key: "nextSlide", value: function() {
      this.goToSlide(this.index + 1);
    } }, { key: "goToSlide", value: function() {
      var e3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e3 < 0 || e3 > this.elements.length - 1))
        return false;
      e3 < 0 ? e3 = this.elements.length - 1 : e3 >= this.elements.length && (e3 = 0), this.showSlide(e3);
    } }, { key: "insertSlide", value: function() {
      var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
      t2 < 0 && (t2 = this.elements.length);
      var i2 = new $(e3, this, t2), n2 = i2.getConfig(), s2 = l({}, n2), o2 = i2.create(), r2 = this.elements.length - 1;
      s2.index = t2, s2.node = false, s2.instance = i2, s2.slideConfig = n2, this.elements.splice(t2, 0, s2);
      var a2 = null, h2 = null;
      if (this.slidesContainer) {
        if (t2 > r2)
          this.slidesContainer.appendChild(o2);
        else {
          var d2 = this.slidesContainer.querySelectorAll(".gslide")[t2];
          this.slidesContainer.insertBefore(o2, d2);
        }
        (this.settings.preload && 0 == this.index && 0 == t2 || this.index - 1 == t2 || this.index + 1 == t2) && this.preloadSlide(t2), 0 === this.index && 0 === t2 && (this.index = 1), this.updateNavigationClasses(), a2 = this.slidesContainer.querySelectorAll(".gslide")[t2], h2 = this.getSlidePlayerInstance(t2), s2.slideNode = a2;
      }
      this.trigger("slide_inserted", { index: t2, slide: a2, slideNode: a2, slideConfig: n2, slideIndex: t2, trigger: null, player: h2 }), T(this.settings.slideInserted) && this.settings.slideInserted({ index: t2, slide: a2, player: h2 });
    } }, { key: "removeSlide", value: function() {
      var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
      if (e3 < 0 || e3 > this.elements.length - 1)
        return false;
      var t2 = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e3];
      t2 && (this.getActiveSlideIndex() == e3 && (e3 == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t2.parentNode.removeChild(t2)), this.elements.splice(e3, 1), this.trigger("slide_removed", e3), T(this.settings.slideRemoved) && this.settings.slideRemoved(e3);
    } }, { key: "slideAnimateIn", value: function(e3, t2) {
      var i2 = this, n2 = e3.querySelector(".gslide-media"), s2 = e3.querySelector(".gslide-description"), l2 = { index: this.prevActiveSlideIndex, slide: this.prevActiveSlide, slideNode: this.prevActiveSlide, slideIndex: this.prevActiveSlide, slideConfig: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig, trigger: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node, player: this.getSlidePlayerInstance(this.prevActiveSlideIndex) }, o2 = { index: this.index, slide: this.activeSlide, slideNode: this.activeSlide, slideConfig: this.elements[this.index].slideConfig, slideIndex: this.index, trigger: this.elements[this.index].node, player: this.getSlidePlayerInstance(this.index) };
      if (n2.offsetWidth > 0 && s2 && (p(s2), s2.style.display = ""), d(e3, this.effectsClasses), t2)
        g(e3, this.settings.cssEfects[this.settings.openEffect].in, function() {
          i2.settings.autoplayVideos && i2.slidePlayerPlay(e3), i2.trigger("slide_changed", { prev: l2, current: o2 }), T(i2.settings.afterSlideChange) && i2.settings.afterSlideChange.apply(i2, [l2, o2]);
        });
      else {
        var r2 = this.settings.slideEffect, a2 = "none" !== r2 ? this.settings.cssEfects[r2].in : r2;
        this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (a2 = this.settings.cssEfects.slideBack.in), g(e3, a2, function() {
          i2.settings.autoplayVideos && i2.slidePlayerPlay(e3), i2.trigger("slide_changed", { prev: l2, current: o2 }), T(i2.settings.afterSlideChange) && i2.settings.afterSlideChange.apply(i2, [l2, o2]);
        });
      }
      setTimeout(function() {
        i2.resize(e3);
      }, 100), h(e3, "current");
    } }, { key: "slideAnimateOut", value: function() {
      if (!this.prevActiveSlide)
        return false;
      var e3 = this.prevActiveSlide;
      d(e3, this.effectsClasses), h(e3, "prev");
      var t2 = this.settings.slideEffect, i2 = "none" !== t2 ? this.settings.cssEfects[t2].out : t2;
      this.slidePlayerPause(e3), this.trigger("slide_before_change", { prev: { index: this.prevActiveSlideIndex, slide: this.prevActiveSlide, slideNode: this.prevActiveSlide, slideIndex: this.prevActiveSlideIndex, slideConfig: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig, trigger: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node, player: this.getSlidePlayerInstance(this.prevActiveSlideIndex) }, current: { index: this.index, slide: this.activeSlide, slideNode: this.activeSlide, slideIndex: this.index, slideConfig: this.elements[this.index].slideConfig, trigger: this.elements[this.index].node, player: this.getSlidePlayerInstance(this.index) } }), T(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{ index: this.prevActiveSlideIndex, slide: this.prevActiveSlide, player: this.getSlidePlayerInstance(this.prevActiveSlideIndex) }, { index: this.index, slide: this.activeSlide, player: this.getSlidePlayerInstance(this.index) }]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i2 = this.settings.cssEfects.slideBack.out), g(e3, i2, function() {
        var t3 = e3.querySelector(".ginner-container"), i3 = e3.querySelector(".gslide-media"), n2 = e3.querySelector(".gslide-description");
        t3.style.transform = "", i3.style.transform = "", d(i3, "greset"), i3.style.opacity = "", n2 && (n2.style.opacity = ""), d(e3, "prev");
      });
    } }, { key: "getAllPlayers", value: function() {
      return this.videoPlayers;
    } }, { key: "getSlidePlayerInstance", value: function(e3) {
      var t2 = "gvideo" + e3, i2 = this.getAllPlayers();
      return !(!O(i2, t2) || !i2[t2]) && i2[t2];
    } }, { key: "stopSlideVideo", value: function(e3) {
      if (k(e3)) {
        var t2 = e3.querySelector(".gvideo-wrapper");
        t2 && (e3 = t2.getAttribute("data-index"));
      }
      console.log("stopSlideVideo is deprecated, use slidePlayerPause");
      var i2 = this.getSlidePlayerInstance(e3);
      i2 && i2.playing && i2.pause();
    } }, { key: "slidePlayerPause", value: function(e3) {
      if (k(e3)) {
        var t2 = e3.querySelector(".gvideo-wrapper");
        t2 && (e3 = t2.getAttribute("data-index"));
      }
      var i2 = this.getSlidePlayerInstance(e3);
      i2 && i2.playing && i2.pause();
    } }, { key: "playSlideVideo", value: function(e3) {
      if (k(e3)) {
        var t2 = e3.querySelector(".gvideo-wrapper");
        t2 && (e3 = t2.getAttribute("data-index"));
      }
      console.log("playSlideVideo is deprecated, use slidePlayerPlay");
      var i2 = this.getSlidePlayerInstance(e3);
      i2 && !i2.playing && i2.play();
    } }, { key: "slidePlayerPlay", value: function(e3) {
      var t2;
      if (!J || null !== (t2 = this.settings.plyr.config) && void 0 !== t2 && t2.muted) {
        if (k(e3)) {
          var i2 = e3.querySelector(".gvideo-wrapper");
          i2 && (e3 = i2.getAttribute("data-index"));
        }
        var n2 = this.getSlidePlayerInstance(e3);
        n2 && !n2.playing && (n2.play(), this.settings.autofocusVideos && n2.elements.container.focus());
      }
    } }, { key: "setElements", value: function(e3) {
      var t2 = this;
      this.settings.elements = false;
      var i2 = [];
      e3 && e3.length && o(e3, function(e4, n2) {
        var s2 = new $(e4, t2, n2), o2 = s2.getConfig(), r2 = l({}, o2);
        r2.slideConfig = o2, r2.instance = s2, r2.index = n2, i2.push(r2);
      }), this.elements = i2, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (o(this.elements, function() {
        var e4 = m(t2.settings.slideHTML);
        t2.slidesContainer.appendChild(e4);
      }), this.showSlide(0, true)));
    } }, { key: "getElementIndex", value: function(e3) {
      var t2 = false;
      return o(this.elements, function(i2, n2) {
        if (O(i2, "node") && i2.node == e3)
          return t2 = n2, true;
      }), t2;
    } }, { key: "getElements", value: function() {
      var e3 = this, t2 = [];
      this.elements = this.elements ? this.elements : [], !I(this.settings.elements) && E(this.settings.elements) && this.settings.elements.length && o(this.settings.elements, function(i3, n2) {
        var s2 = new $(i3, e3, n2), o2 = s2.getConfig(), r2 = l({}, o2);
        r2.node = false, r2.index = n2, r2.instance = s2, r2.slideConfig = o2, t2.push(r2);
      });
      var i2 = false;
      return this.getSelector() && (i2 = document.querySelectorAll(this.getSelector())), i2 ? (o(i2, function(i3, n2) {
        var s2 = new $(i3, e3, n2), o2 = s2.getConfig(), r2 = l({}, o2);
        r2.node = i3, r2.index = n2, r2.instance = s2, r2.slideConfig = o2, r2.gallery = i3.getAttribute("data-gallery"), t2.push(r2);
      }), t2) : t2;
    } }, { key: "getGalleryElements", value: function(e3, t2) {
      return e3.filter(function(e4) {
        return e4.gallery == t2;
      });
    } }, { key: "getSelector", value: function() {
      return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector);
    } }, { key: "getActiveSlide", value: function() {
      return this.slidesContainer.querySelectorAll(".gslide")[this.index];
    } }, { key: "getActiveSlideIndex", value: function() {
      return this.index;
    } }, { key: "getAnimationClasses", value: function() {
      var e3 = [];
      for (var t2 in this.settings.cssEfects)
        if (this.settings.cssEfects.hasOwnProperty(t2)) {
          var i2 = this.settings.cssEfects[t2];
          e3.push("g".concat(i2.in)), e3.push("g".concat(i2.out));
        }
      return e3.join(" ");
    } }, { key: "build", value: function() {
      var e3 = this;
      if (this.built)
        return false;
      var t2 = document.body.childNodes, i2 = [];
      o(t2, function(e4) {
        e4.parentNode == document.body && "#" !== e4.nodeName.charAt(0) && e4.hasAttribute && !e4.hasAttribute("aria-hidden") && (i2.push(e4), e4.setAttribute("aria-hidden", "true"));
      });
      var n2 = O(this.settings.svg, "next") ? this.settings.svg.next : "", s2 = O(this.settings.svg, "prev") ? this.settings.svg.prev : "", l2 = O(this.settings.svg, "close") ? this.settings.svg.close : "", r2 = this.settings.lightboxHTML;
      r2 = m(r2 = (r2 = (r2 = r2.replace(/{nextSVG}/g, n2)).replace(/{prevSVG}/g, s2)).replace(/{closeSVG}/g, l2)), document.body.appendChild(r2);
      var d2 = document.getElementById("glightbox-body");
      this.modal = d2;
      var g2 = d2.querySelector(".gclose");
      this.prevButton = d2.querySelector(".gprev"), this.nextButton = d2.querySelector(".gnext"), this.overlay = d2.querySelector(".goverlay"), this.loader = d2.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = i2, this.events = {}, h(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && g2 && (this.events.close = a("click", { onElement: g2, withCallback: function(t3, i3) {
        t3.preventDefault(), e3.close();
      } })), g2 && !this.settings.closeButton && g2.parentNode.removeChild(g2), this.nextButton && (this.events.next = a("click", { onElement: this.nextButton, withCallback: function(t3, i3) {
        t3.preventDefault(), e3.nextSlide();
      } })), this.prevButton && (this.events.prev = a("click", { onElement: this.prevButton, withCallback: function(t3, i3) {
        t3.preventDefault(), e3.prevSlide();
      } })), this.settings.closeOnOutsideClick && (this.events.outClose = a("click", { onElement: d2, withCallback: function(t3, i3) {
        e3.preventOutsideClick || c(document.body, "glightbox-mobile") || u(t3.target, ".ginner-container") || u(t3.target, ".gbtn") || c(t3.target, "gnext") || c(t3.target, "gprev") || e3.close();
      } })), o(this.elements, function(t3, i3) {
        e3.slidesContainer.appendChild(t3.instance.create()), t3.slideNode = e3.slidesContainer.querySelectorAll(".gslide")[i3];
      }), K && h(document.body, "glightbox-touch"), this.events.resize = a("resize", { onElement: window, withCallback: function() {
        e3.resize();
      } }), this.built = true;
    } }, { key: "resize", value: function() {
      var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      if ((e3 = e3 || this.activeSlide) && !c(e3, "zoomed")) {
        var t2 = y(), i2 = e3.querySelector(".gvideo-wrapper"), n2 = e3.querySelector(".gslide-image"), s2 = this.slideDescription, l2 = t2.width, o2 = t2.height;
        if (l2 <= 768 ? h(document.body, "glightbox-mobile") : d(document.body, "glightbox-mobile"), i2 || n2) {
          var r2 = false;
          if (s2 && (c(s2, "description-bottom") || c(s2, "description-top")) && !c(s2, "gabsolute") && (r2 = true), n2) {
            if (l2 <= 768)
              n2.querySelector("img");
            else if (r2) {
              var a2 = s2.offsetHeight, u2 = n2.querySelector("img");
              u2.setAttribute("style", "max-height: calc(100vh - ".concat(a2, "px)")), s2.setAttribute("style", "max-width: ".concat(u2.offsetWidth, "px;"));
            }
          }
          if (i2) {
            var g2 = O(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
            if (!g2) {
              var v2 = i2.clientWidth, f2 = i2.clientHeight, p2 = v2 / f2;
              g2 = "".concat(v2 / p2, ":").concat(f2 / p2);
            }
            var m2 = g2.split(":"), x2 = this.settings.videosWidth, b2 = this.settings.videosWidth, S2 = (b2 = M(x2) || -1 !== x2.indexOf("px") ? parseInt(x2) : -1 !== x2.indexOf("vw") ? l2 * parseInt(x2) / 100 : -1 !== x2.indexOf("vh") ? o2 * parseInt(x2) / 100 : -1 !== x2.indexOf("%") ? l2 * parseInt(x2) / 100 : parseInt(i2.clientWidth)) / (parseInt(m2[0]) / parseInt(m2[1]));
            if (S2 = Math.floor(S2), r2 && (o2 -= s2.offsetHeight), b2 > l2 || S2 > o2 || o2 < S2 && l2 > b2) {
              var w2 = i2.offsetWidth, T2 = i2.offsetHeight, C2 = o2 / T2, k2 = { width: w2 * C2, height: T2 * C2 };
              i2.parentNode.setAttribute("style", "max-width: ".concat(k2.width, "px")), r2 && s2.setAttribute("style", "max-width: ".concat(k2.width, "px;"));
            } else
              i2.parentNode.style.maxWidth = "".concat(x2), r2 && s2.setAttribute("style", "max-width: ".concat(x2, ";"));
          }
        }
      }
    } }, { key: "reload", value: function() {
      this.init();
    } }, { key: "updateNavigationClasses", value: function() {
      var e3 = this.loop();
      d(this.nextButton, "disabled"), d(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (h(this.prevButton, "disabled"), h(this.nextButton, "disabled")) : 0 !== this.index || e3 ? this.index !== this.elements.length - 1 || e3 || h(this.nextButton, "disabled") : h(this.prevButton, "disabled");
    } }, { key: "loop", value: function() {
      var e3 = O(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
      return e3 = O(this.settings, "loop") ? this.settings.loop : e3, e3;
    } }, { key: "close", value: function() {
      var e3 = this;
      if (!this.lightboxOpen) {
        if (this.events) {
          for (var t2 in this.events)
            this.events.hasOwnProperty(t2) && this.events[t2].destroy();
          this.events = null;
        }
        return false;
      }
      if (this.closing)
        return false;
      this.closing = true, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && o(this.bodyHiddenChildElms, function(e4) {
        e4.removeAttribute("aria-hidden");
      }), h(this.modal, "glightbox-closing"), g(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), g(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function() {
        if (e3.activeSlide = null, e3.prevActiveSlideIndex = null, e3.prevActiveSlide = null, e3.built = false, e3.events) {
          for (var t3 in e3.events)
            e3.events.hasOwnProperty(t3) && e3.events[t3].destroy();
          e3.events = null;
        }
        var i2 = document.body;
        d(Q, "glightbox-open"), d(i2, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e3.modal.parentNode.removeChild(e3.modal), e3.trigger("close"), T(e3.settings.onClose) && e3.settings.onClose();
        var n2 = document.querySelector(".gcss-styles");
        n2 && n2.parentNode.removeChild(n2), e3.lightboxOpen = false, e3.closing = null;
      });
    } }, { key: "destroy", value: function() {
      this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy();
    } }, { key: "on", value: function(e3, t2) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (!e3 || !T(t2))
        throw new TypeError("Event name and callback must be defined");
      this.apiEvents.push({ evt: e3, once: i2, callback: t2 });
    } }, { key: "once", value: function(e3, t2) {
      this.on(e3, t2, true);
    } }, { key: "trigger", value: function(e3) {
      var t2 = this, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n2 = [];
      o(this.apiEvents, function(t3, s2) {
        var l2 = t3.evt, o2 = t3.once, r2 = t3.callback;
        l2 == e3 && (r2(i2), o2 && n2.push(s2));
      }), n2.length && o(n2, function(e4) {
        return t2.apiEvents.splice(e4, 1);
      });
    } }, { key: "clearAllEvents", value: function() {
      this.apiEvents.splice(0, this.apiEvents.length);
    } }, { key: "version", value: function() {
      return "3.1.0";
    } }]), e2;
  }();
  return function() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t2 = new te(e2);
    return t2.init(), t2;
  };
});
(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = global || self, global.GLightbox = factory());
})(globalThis, function() {
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var uid = Date.now();
  function extend() {
    var extended = {};
    var deep = true;
    var i = 0;
    var length = arguments.length;
    if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
      deep = arguments[0];
      i++;
    }
    var merge = function merge2(obj2) {
      for (var prop in obj2) {
        if (Object.prototype.hasOwnProperty.call(obj2, prop)) {
          if (deep && Object.prototype.toString.call(obj2[prop]) === "[object Object]") {
            extended[prop] = extend(true, extended[prop], obj2[prop]);
          } else {
            extended[prop] = obj2[prop];
          }
        }
      }
    };
    for (; i < length; i++) {
      var obj = arguments[i];
      merge(obj);
    }
    return extended;
  }
  function each(collection, callback) {
    if (isNode(collection) || collection === window || collection === document) {
      collection = [collection];
    }
    if (!isArrayLike(collection) && !isObject(collection)) {
      collection = [collection];
    }
    if (size(collection) == 0) {
      return;
    }
    if (isArrayLike(collection) && !isObject(collection)) {
      var l = collection.length, i = 0;
      for (; i < l; i++) {
        if (callback.call(collection[i], collection[i], i, collection) === false) {
          break;
        }
      }
    } else if (isObject(collection)) {
      for (var key in collection) {
        if (has(collection, key)) {
          if (callback.call(collection[key], collection[key], key, collection) === false) {
            break;
          }
        }
      }
    }
  }
  function getNodeEvents(node) {
    var name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var fn = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    var cache = node[uid] = node[uid] || [];
    var data = {
      all: cache,
      evt: null,
      found: null
    };
    if (name && fn && size(cache) > 0) {
      each(cache, function(cl, i) {
        if (cl.eventName == name && cl.fn.toString() == fn.toString()) {
          data.found = true;
          data.evt = i;
          return false;
        }
      });
    }
    return data;
  }
  function addEvent(eventName) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, onElement = _ref.onElement, withCallback = _ref.withCallback, _ref$avoidDuplicate = _ref.avoidDuplicate, avoidDuplicate = _ref$avoidDuplicate === void 0 ? true : _ref$avoidDuplicate, _ref$once = _ref.once, once = _ref$once === void 0 ? false : _ref$once, _ref$useCapture = _ref.useCapture, useCapture = _ref$useCapture === void 0 ? false : _ref$useCapture;
    var thisArg = arguments.length > 2 ? arguments[2] : void 0;
    var element = onElement || [];
    if (isString(element)) {
      element = document.querySelectorAll(element);
    }
    function handler(event) {
      if (isFunction(withCallback)) {
        withCallback.call(thisArg, event, this);
      }
      if (once) {
        handler.destroy();
      }
    }
    handler.destroy = function() {
      each(element, function(el) {
        var events = getNodeEvents(el, eventName, handler);
        if (events.found) {
          events.all.splice(events.evt, 1);
        }
        if (el.removeEventListener) {
          el.removeEventListener(eventName, handler, useCapture);
        }
      });
    };
    each(element, function(el) {
      var events = getNodeEvents(el, eventName, handler);
      if (el.addEventListener && avoidDuplicate && !events.found || !avoidDuplicate) {
        el.addEventListener(eventName, handler, useCapture);
        events.all.push({
          eventName,
          fn: handler
        });
      }
    });
    return handler;
  }
  function addClass(node, name) {
    each(name.split(" "), function(cl) {
      return node.classList.add(cl);
    });
  }
  function removeClass(node, name) {
    each(name.split(" "), function(cl) {
      return node.classList.remove(cl);
    });
  }
  function hasClass(node, name) {
    return node.classList.contains(name);
  }
  function closest(elem, selector) {
    while (elem !== document.body) {
      elem = elem.parentElement;
      if (!elem) {
        return false;
      }
      var matches = typeof elem.matches == "function" ? elem.matches(selector) : elem.msMatchesSelector(selector);
      if (matches) {
        return elem;
      }
    }
  }
  function animateElement(element) {
    var animation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    var callback = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!element || animation === "") {
      return false;
    }
    if (animation === "none") {
      if (isFunction(callback)) {
        callback();
      }
      return false;
    }
    var animationEnd = whichAnimationEvent();
    var animationNames = animation.split(" ");
    each(animationNames, function(name) {
      addClass(element, "g" + name);
    });
    addEvent(animationEnd, {
      onElement: element,
      avoidDuplicate: false,
      once: true,
      withCallback: function withCallback(event, target) {
        each(animationNames, function(name) {
          removeClass(target, "g" + name);
        });
        if (isFunction(callback)) {
          callback();
        }
      }
    });
  }
  function cssTransform(node) {
    var translate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    if (translate === "") {
      node.style.webkitTransform = "";
      node.style.MozTransform = "";
      node.style.msTransform = "";
      node.style.OTransform = "";
      node.style.transform = "";
      return false;
    }
    node.style.webkitTransform = translate;
    node.style.MozTransform = translate;
    node.style.msTransform = translate;
    node.style.OTransform = translate;
    node.style.transform = translate;
  }
  function show(element) {
    element.style.display = "block";
  }
  function hide(element) {
    element.style.display = "none";
  }
  function createHTML(htmlStr) {
    var frag = document.createDocumentFragment(), temp = document.createElement("div");
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
      frag.appendChild(temp.firstChild);
    }
    return frag;
  }
  function windowSize() {
    return {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    };
  }
  function whichAnimationEvent() {
    var t, el = document.createElement("fakeelement");
    var animations = {
      animation: "animationend",
      OAnimation: "oAnimationEnd",
      MozAnimation: "animationend",
      WebkitAnimation: "webkitAnimationEnd"
    };
    for (t in animations) {
      if (el.style[t] !== void 0) {
        return animations[t];
      }
    }
  }
  function whichTransitionEvent() {
    var t, el = document.createElement("fakeelement");
    var transitions = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };
    for (t in transitions) {
      if (el.style[t] !== void 0) {
        return transitions[t];
      }
    }
  }
  function createIframe(config) {
    var url = config.url, allow = config.allow, callback = config.callback, appendTo = config.appendTo;
    var iframe = document.createElement("iframe");
    iframe.className = "vimeo-video gvideo";
    iframe.src = url;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    if (allow) {
      iframe.setAttribute("allow", allow);
    }
    iframe.onload = function() {
      iframe.onload = null;
      addClass(iframe, "node-ready");
      if (isFunction(callback)) {
        callback();
      }
    };
    if (appendTo) {
      appendTo.appendChild(iframe);
    }
    return iframe;
  }
  function waitUntil(check, onComplete, delay, timeout) {
    if (check()) {
      onComplete();
      return;
    }
    if (!delay) {
      delay = 100;
    }
    var timeoutPointer;
    var intervalPointer = setInterval(function() {
      if (!check()) {
        return;
      }
      clearInterval(intervalPointer);
      if (timeoutPointer) {
        clearTimeout(timeoutPointer);
      }
      onComplete();
    }, delay);
    if (timeout) {
      timeoutPointer = setTimeout(function() {
        clearInterval(intervalPointer);
      }, timeout);
    }
  }
  function injectAssets(url, waitFor, callback) {
    if (isNil(url)) {
      console.error("Inject assets error");
      return;
    }
    if (isFunction(waitFor)) {
      callback = waitFor;
      waitFor = false;
    }
    if (isString(waitFor) && waitFor in window) {
      if (isFunction(callback)) {
        callback();
      }
      return;
    }
    var found;
    if (url.indexOf(".css") !== -1) {
      found = document.querySelectorAll('link[href="' + url + '"]');
      if (found && found.length > 0) {
        if (isFunction(callback)) {
          callback();
        }
        return;
      }
      var head = document.getElementsByTagName("head")[0];
      var headStyles = head.querySelectorAll('link[rel="stylesheet"]');
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = url;
      link.media = "all";
      if (headStyles) {
        head.insertBefore(link, headStyles[0]);
      } else {
        head.appendChild(link);
      }
      if (isFunction(callback)) {
        callback();
      }
      return;
    }
    found = document.querySelectorAll('script[src="' + url + '"]');
    if (found && found.length > 0) {
      if (isFunction(callback)) {
        if (isString(waitFor)) {
          waitUntil(function() {
            return typeof window[waitFor] !== "undefined";
          }, function() {
            callback();
          });
          return false;
        }
        callback();
      }
      return;
    }
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.onload = function() {
      if (isFunction(callback)) {
        if (isString(waitFor)) {
          waitUntil(function() {
            return typeof window[waitFor] !== "undefined";
          }, function() {
            callback();
          });
          return false;
        }
        callback();
      }
    };
    document.body.appendChild(script);
  }
  function isMobile() {
    return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
  }
  function isTouch() {
    return isMobile() !== null || document.createTouch !== void 0 || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints;
  }
  function isFunction(f) {
    return typeof f === "function";
  }
  function isString(s) {
    return typeof s === "string";
  }
  function isNode(el) {
    return !!(el && el.nodeType && el.nodeType == 1);
  }
  function isArray(ar) {
    return Array.isArray(ar);
  }
  function isArrayLike(ar) {
    return ar && ar.length && isFinite(ar.length);
  }
  function isObject(o) {
    var type = _typeof(o);
    return type === "object" && o != null && !isFunction(o) && !isArray(o);
  }
  function isNil(o) {
    return o == null;
  }
  function has(obj, key) {
    return obj !== null && hasOwnProperty.call(obj, key);
  }
  function size(o) {
    if (isObject(o)) {
      if (o.keys) {
        return o.keys().length;
      }
      var l = 0;
      for (var k in o) {
        if (has(o, k)) {
          l++;
        }
      }
      return l;
    } else {
      return o.length;
    }
  }
  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  function getNextFocusElement() {
    var current = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
    var btns = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
    if (!btns.length) {
      return false;
    }
    if (btns.length == 1) {
      return btns[0];
    }
    if (typeof current == "string") {
      current = parseInt(current);
    }
    var orders = [];
    each(btns, function(btn) {
      orders.push(btn.getAttribute("data-taborder"));
    });
    var highestOrder = Math.max.apply(Math, orders.map(function(order) {
      return parseInt(order);
    }));
    var newIndex = current < 0 ? 1 : current + 1;
    if (newIndex > highestOrder) {
      newIndex = "1";
    }
    var nextOrders = orders.filter(function(el) {
      return el >= parseInt(newIndex);
    });
    var nextFocus = nextOrders.sort()[0];
    return document.querySelector('.gbtn[data-taborder="'.concat(nextFocus, '"]'));
  }
  function keyboardNavigation(instance) {
    if (instance.events.hasOwnProperty("keyboard")) {
      return false;
    }
    instance.events["keyboard"] = addEvent("keydown", {
      onElement: window,
      withCallback: function withCallback(event, target) {
        event = event || window.event;
        var key = event.keyCode;
        if (key == 9) {
          var focusedButton = document.querySelector(".gbtn.focused");
          if (!focusedButton) {
            var activeElement = document.activeElement && document.activeElement.nodeName ? document.activeElement.nodeName.toLocaleLowerCase() : false;
            if (activeElement == "input" || activeElement == "textarea" || activeElement == "button") {
              return;
            }
          }
          event.preventDefault();
          var btns = document.querySelectorAll(".gbtn[data-taborder]");
          if (!btns || btns.length <= 0) {
            return;
          }
          if (!focusedButton) {
            var first = getNextFocusElement();
            if (first) {
              first.focus();
              addClass(first, "focused");
            }
            return;
          }
          var currentFocusOrder = focusedButton.getAttribute("data-taborder");
          var nextFocus = getNextFocusElement(currentFocusOrder);
          removeClass(focusedButton, "focused");
          if (nextFocus) {
            nextFocus.focus();
            addClass(nextFocus, "focused");
          }
        }
        if (key == 39) {
          instance.nextSlide();
        }
        if (key == 37) {
          instance.prevSlide();
        }
        if (key == 27) {
          instance.close();
        }
      }
    });
  }
  function getLen(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
  }
  function dot(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y;
  }
  function getAngle(v1, v2) {
    var mr = getLen(v1) * getLen(v2);
    if (mr === 0) {
      return 0;
    }
    var r = dot(v1, v2) / mr;
    if (r > 1) {
      r = 1;
    }
    return Math.acos(r);
  }
  function cross(v1, v2) {
    return v1.x * v2.y - v2.x * v1.y;
  }
  function getRotateAngle(v1, v2) {
    var angle = getAngle(v1, v2);
    if (cross(v1, v2) > 0) {
      angle *= -1;
    }
    return angle * 180 / Math.PI;
  }
  var EventsHandlerAdmin = function() {
    function EventsHandlerAdmin2(el) {
      _classCallCheck(this, EventsHandlerAdmin2);
      this.handlers = [];
      this.el = el;
    }
    _createClass(EventsHandlerAdmin2, [{
      key: "add",
      value: function add(handler) {
        this.handlers.push(handler);
      }
    }, {
      key: "del",
      value: function del(handler) {
        if (!handler) {
          this.handlers = [];
        }
        for (var i = this.handlers.length; i >= 0; i--) {
          if (this.handlers[i] === handler) {
            this.handlers.splice(i, 1);
          }
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch() {
        for (var i = 0, len = this.handlers.length; i < len; i++) {
          var handler = this.handlers[i];
          if (typeof handler === "function") {
            handler.apply(this.el, arguments);
          }
        }
      }
    }]);
    return EventsHandlerAdmin2;
  }();
  function wrapFunc(el, handler) {
    var EventshandlerAdmin = new EventsHandlerAdmin(el);
    EventshandlerAdmin.add(handler);
    return EventshandlerAdmin;
  }
  var TouchEvents = function() {
    function TouchEvents2(el, option) {
      _classCallCheck(this, TouchEvents2);
      this.element = typeof el == "string" ? document.querySelector(el) : el;
      this.start = this.start.bind(this);
      this.move = this.move.bind(this);
      this.end = this.end.bind(this);
      this.cancel = this.cancel.bind(this);
      this.element.addEventListener("touchstart", this.start, false);
      this.element.addEventListener("touchmove", this.move, false);
      this.element.addEventListener("touchend", this.end, false);
      this.element.addEventListener("touchcancel", this.cancel, false);
      this.preV = {
        x: null,
        y: null
      };
      this.pinchStartLen = null;
      this.zoom = 1;
      this.isDoubleTap = false;
      var noop = function noop2() {
      };
      this.rotate = wrapFunc(this.element, option.rotate || noop);
      this.touchStart = wrapFunc(this.element, option.touchStart || noop);
      this.multipointStart = wrapFunc(this.element, option.multipointStart || noop);
      this.multipointEnd = wrapFunc(this.element, option.multipointEnd || noop);
      this.pinch = wrapFunc(this.element, option.pinch || noop);
      this.swipe = wrapFunc(this.element, option.swipe || noop);
      this.tap = wrapFunc(this.element, option.tap || noop);
      this.doubleTap = wrapFunc(this.element, option.doubleTap || noop);
      this.longTap = wrapFunc(this.element, option.longTap || noop);
      this.singleTap = wrapFunc(this.element, option.singleTap || noop);
      this.pressMove = wrapFunc(this.element, option.pressMove || noop);
      this.twoFingerPressMove = wrapFunc(this.element, option.twoFingerPressMove || noop);
      this.touchMove = wrapFunc(this.element, option.touchMove || noop);
      this.touchEnd = wrapFunc(this.element, option.touchEnd || noop);
      this.touchCancel = wrapFunc(this.element, option.touchCancel || noop);
      this.translateContainer = this.element;
      this._cancelAllHandler = this.cancelAll.bind(this);
      window.addEventListener("scroll", this._cancelAllHandler);
      this.delta = null;
      this.last = null;
      this.now = null;
      this.tapTimeout = null;
      this.singleTapTimeout = null;
      this.longTapTimeout = null;
      this.swipeTimeout = null;
      this.x1 = this.x2 = this.y1 = this.y2 = null;
      this.preTapPosition = {
        x: null,
        y: null
      };
    }
    _createClass(TouchEvents2, [{
      key: "start",
      value: function start(evt) {
        if (!evt.touches) {
          return;
        }
        var ignoreDragFor = ["a", "button", "input"];
        if (evt.target && evt.target.nodeName && ignoreDragFor.indexOf(evt.target.nodeName.toLowerCase()) >= 0) {
          console.log("ignore drag for this touched element", evt.target.nodeName.toLowerCase());
          return;
        }
        this.now = Date.now();
        this.x1 = evt.touches[0].pageX;
        this.y1 = evt.touches[0].pageY;
        this.delta = this.now - (this.last || this.now);
        this.touchStart.dispatch(evt, this.element);
        if (this.preTapPosition.x !== null) {
          this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30;
          if (this.isDoubleTap) {
            clearTimeout(this.singleTapTimeout);
          }
        }
        this.preTapPosition.x = this.x1;
        this.preTapPosition.y = this.y1;
        this.last = this.now;
        var preV = this.preV, len = evt.touches.length;
        if (len > 1) {
          this._cancelLongTap();
          this._cancelSingleTap();
          var v = {
            x: evt.touches[1].pageX - this.x1,
            y: evt.touches[1].pageY - this.y1
          };
          preV.x = v.x;
          preV.y = v.y;
          this.pinchStartLen = getLen(preV);
          this.multipointStart.dispatch(evt, this.element);
        }
        this._preventTap = false;
        this.longTapTimeout = setTimeout(function() {
          this.longTap.dispatch(evt, this.element);
          this._preventTap = true;
        }.bind(this), 750);
      }
    }, {
      key: "move",
      value: function move(evt) {
        if (!evt.touches) {
          return;
        }
        var preV = this.preV, len = evt.touches.length, currentX = evt.touches[0].pageX, currentY = evt.touches[0].pageY;
        this.isDoubleTap = false;
        if (len > 1) {
          var sCurrentX = evt.touches[1].pageX, sCurrentY = evt.touches[1].pageY;
          var v = {
            x: evt.touches[1].pageX - currentX,
            y: evt.touches[1].pageY - currentY
          };
          if (preV.x !== null) {
            if (this.pinchStartLen > 0) {
              evt.zoom = getLen(v) / this.pinchStartLen;
              this.pinch.dispatch(evt, this.element);
            }
            evt.angle = getRotateAngle(v, preV);
            this.rotate.dispatch(evt, this.element);
          }
          preV.x = v.x;
          preV.y = v.y;
          if (this.x2 !== null && this.sx2 !== null) {
            evt.deltaX = (currentX - this.x2 + sCurrentX - this.sx2) / 2;
            evt.deltaY = (currentY - this.y2 + sCurrentY - this.sy2) / 2;
          } else {
            evt.deltaX = 0;
            evt.deltaY = 0;
          }
          this.twoFingerPressMove.dispatch(evt, this.element);
          this.sx2 = sCurrentX;
          this.sy2 = sCurrentY;
        } else {
          if (this.x2 !== null) {
            evt.deltaX = currentX - this.x2;
            evt.deltaY = currentY - this.y2;
            var movedX = Math.abs(this.x1 - this.x2), movedY = Math.abs(this.y1 - this.y2);
            if (movedX > 10 || movedY > 10) {
              this._preventTap = true;
            }
          } else {
            evt.deltaX = 0;
            evt.deltaY = 0;
          }
          this.pressMove.dispatch(evt, this.element);
        }
        this.touchMove.dispatch(evt, this.element);
        this._cancelLongTap();
        this.x2 = currentX;
        this.y2 = currentY;
        if (len > 1) {
          evt.preventDefault();
        }
      }
    }, {
      key: "end",
      value: function end(evt) {
        if (!evt.changedTouches) {
          return;
        }
        this._cancelLongTap();
        var self2 = this;
        if (evt.touches.length < 2) {
          this.multipointEnd.dispatch(evt, this.element);
          this.sx2 = this.sy2 = null;
        }
        if (this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30) {
          evt.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2);
          this.swipeTimeout = setTimeout(function() {
            self2.swipe.dispatch(evt, self2.element);
          }, 0);
        } else {
          this.tapTimeout = setTimeout(function() {
            if (!self2._preventTap) {
              self2.tap.dispatch(evt, self2.element);
            }
            if (self2.isDoubleTap) {
              self2.doubleTap.dispatch(evt, self2.element);
              self2.isDoubleTap = false;
            }
          }, 0);
          if (!self2.isDoubleTap) {
            self2.singleTapTimeout = setTimeout(function() {
              self2.singleTap.dispatch(evt, self2.element);
            }, 250);
          }
        }
        this.touchEnd.dispatch(evt, this.element);
        this.preV.x = 0;
        this.preV.y = 0;
        this.zoom = 1;
        this.pinchStartLen = null;
        this.x1 = this.x2 = this.y1 = this.y2 = null;
      }
    }, {
      key: "cancelAll",
      value: function cancelAll() {
        this._preventTap = true;
        clearTimeout(this.singleTapTimeout);
        clearTimeout(this.tapTimeout);
        clearTimeout(this.longTapTimeout);
        clearTimeout(this.swipeTimeout);
      }
    }, {
      key: "cancel",
      value: function cancel(evt) {
        this.cancelAll();
        this.touchCancel.dispatch(evt, this.element);
      }
    }, {
      key: "_cancelLongTap",
      value: function _cancelLongTap() {
        clearTimeout(this.longTapTimeout);
      }
    }, {
      key: "_cancelSingleTap",
      value: function _cancelSingleTap() {
        clearTimeout(this.singleTapTimeout);
      }
    }, {
      key: "_swipeDirection",
      value: function _swipeDirection(x1, x2, y1, y2) {
        return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? "Left" : "Right" : y1 - y2 > 0 ? "Up" : "Down";
      }
    }, {
      key: "on",
      value: function on(evt, handler) {
        if (this[evt]) {
          this[evt].add(handler);
        }
      }
    }, {
      key: "off",
      value: function off(evt, handler) {
        if (this[evt]) {
          this[evt].del(handler);
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.singleTapTimeout) {
          clearTimeout(this.singleTapTimeout);
        }
        if (this.tapTimeout) {
          clearTimeout(this.tapTimeout);
        }
        if (this.longTapTimeout) {
          clearTimeout(this.longTapTimeout);
        }
        if (this.swipeTimeout) {
          clearTimeout(this.swipeTimeout);
        }
        this.element.removeEventListener("touchstart", this.start);
        this.element.removeEventListener("touchmove", this.move);
        this.element.removeEventListener("touchend", this.end);
        this.element.removeEventListener("touchcancel", this.cancel);
        this.rotate.del();
        this.touchStart.del();
        this.multipointStart.del();
        this.multipointEnd.del();
        this.pinch.del();
        this.swipe.del();
        this.tap.del();
        this.doubleTap.del();
        this.longTap.del();
        this.singleTap.del();
        this.pressMove.del();
        this.twoFingerPressMove.del();
        this.touchMove.del();
        this.touchEnd.del();
        this.touchCancel.del();
        this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null;
        window.removeEventListener("scroll", this._cancelAllHandler);
        return null;
      }
    }]);
    return TouchEvents2;
  }();
  function resetSlideMove(slide) {
    var transitionEnd = whichTransitionEvent();
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var media = hasClass(slide, "gslide-media") ? slide : slide.querySelector(".gslide-media");
    var container = closest(media, ".ginner-container");
    var desc = slide.querySelector(".gslide-description");
    if (windowWidth > 769) {
      media = container;
    }
    addClass(media, "greset");
    cssTransform(media, "translate3d(0, 0, 0)");
    addEvent(transitionEnd, {
      onElement: media,
      once: true,
      withCallback: function withCallback(event, target) {
        removeClass(media, "greset");
      }
    });
    media.style.opacity = "";
    if (desc) {
      desc.style.opacity = "";
    }
  }
  function touchNavigation(instance) {
    if (instance.events.hasOwnProperty("touch")) {
      return false;
    }
    var winSize = windowSize();
    var winWidth = winSize.width;
    var winHeight = winSize.height;
    var process = false;
    var currentSlide = null;
    var media = null;
    var mediaImage = null;
    var doingMove = false;
    var initScale = 1;
    var maxScale = 4.5;
    var currentScale = 1;
    var doingZoom = false;
    var imageZoomed = false;
    var zoomedPosX = null;
    var zoomedPosY = null;
    var lastZoomedPosX = null;
    var lastZoomedPosY = null;
    var hDistance;
    var vDistance;
    var hDistancePercent = 0;
    var vDistancePercent = 0;
    var vSwipe = false;
    var hSwipe = false;
    var startCoords = {};
    var endCoords = {};
    var xDown = 0;
    var yDown = 0;
    var isInlined;
    var sliderWrapper = document.getElementById("glightbox-slider");
    var overlay = document.querySelector(".goverlay");
    var touchInstance = new TouchEvents(sliderWrapper, {
      touchStart: function touchStart(e) {
        process = true;
        if (hasClass(e.targetTouches[0].target, "ginner-container") || closest(e.targetTouches[0].target, ".gslide-desc") || e.targetTouches[0].target.nodeName.toLowerCase() == "a") {
          process = false;
        }
        if (closest(e.targetTouches[0].target, ".gslide-inline") && !hasClass(e.targetTouches[0].target.parentNode, "gslide-inline")) {
          process = false;
        }
        if (process) {
          endCoords = e.targetTouches[0];
          startCoords.pageX = e.targetTouches[0].pageX;
          startCoords.pageY = e.targetTouches[0].pageY;
          xDown = e.targetTouches[0].clientX;
          yDown = e.targetTouches[0].clientY;
          currentSlide = instance.activeSlide;
          media = currentSlide.querySelector(".gslide-media");
          isInlined = currentSlide.querySelector(".gslide-inline");
          mediaImage = null;
          if (hasClass(media, "gslide-image")) {
            mediaImage = media.querySelector("img");
          }
          var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          if (windowWidth > 769) {
            media = currentSlide.querySelector(".ginner-container");
          }
          removeClass(overlay, "greset");
          if (e.pageX > 20 && e.pageX < window.innerWidth - 20) {
            return;
          }
          e.preventDefault();
        }
      },
      touchMove: function touchMove(e) {
        if (!process) {
          return;
        }
        endCoords = e.targetTouches[0];
        if (doingZoom || imageZoomed) {
          return;
        }
        if (isInlined && isInlined.offsetHeight > winHeight) {
          var moved = startCoords.pageX - endCoords.pageX;
          if (Math.abs(moved) <= 13) {
            return false;
          }
        }
        doingMove = true;
        var xUp = e.targetTouches[0].clientX;
        var yUp = e.targetTouches[0].clientY;
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          vSwipe = false;
          hSwipe = true;
        } else {
          hSwipe = false;
          vSwipe = true;
        }
        hDistance = endCoords.pageX - startCoords.pageX;
        hDistancePercent = hDistance * 100 / winWidth;
        vDistance = endCoords.pageY - startCoords.pageY;
        vDistancePercent = vDistance * 100 / winHeight;
        var opacity;
        if (vSwipe && mediaImage) {
          opacity = 1 - Math.abs(vDistance) / winHeight;
          overlay.style.opacity = opacity;
          if (instance.settings.touchFollowAxis) {
            hDistancePercent = 0;
          }
        }
        if (hSwipe) {
          opacity = 1 - Math.abs(hDistance) / winWidth;
          media.style.opacity = opacity;
          if (instance.settings.touchFollowAxis) {
            vDistancePercent = 0;
          }
        }
        if (!mediaImage) {
          return cssTransform(media, "translate3d(".concat(hDistancePercent, "%, 0, 0)"));
        }
        cssTransform(media, "translate3d(".concat(hDistancePercent, "%, ").concat(vDistancePercent, "%, 0)"));
      },
      touchEnd: function touchEnd() {
        if (!process) {
          return;
        }
        doingMove = false;
        if (imageZoomed || doingZoom) {
          lastZoomedPosX = zoomedPosX;
          lastZoomedPosY = zoomedPosY;
          return;
        }
        var v = Math.abs(parseInt(vDistancePercent));
        var h = Math.abs(parseInt(hDistancePercent));
        if (v > 29 && mediaImage) {
          instance.close();
          return;
        }
        if (v < 29 && h < 25) {
          addClass(overlay, "greset");
          overlay.style.opacity = 1;
          return resetSlideMove(media);
        }
      },
      multipointEnd: function multipointEnd() {
        setTimeout(function() {
          doingZoom = false;
        }, 50);
      },
      multipointStart: function multipointStart() {
        doingZoom = true;
        initScale = currentScale ? currentScale : 1;
      },
      pinch: function pinch(evt) {
        if (!mediaImage || doingMove) {
          return false;
        }
        doingZoom = true;
        mediaImage.scaleX = mediaImage.scaleY = initScale * evt.zoom;
        var scale = initScale * evt.zoom;
        imageZoomed = true;
        if (scale <= 1) {
          imageZoomed = false;
          scale = 1;
          lastZoomedPosY = null;
          lastZoomedPosX = null;
          zoomedPosX = null;
          zoomedPosY = null;
          mediaImage.setAttribute("style", "");
          return;
        }
        if (scale > maxScale) {
          scale = maxScale;
        }
        mediaImage.style.transform = "scale3d(".concat(scale, ", ").concat(scale, ", 1)");
        currentScale = scale;
      },
      pressMove: function pressMove(e) {
        if (imageZoomed && !doingZoom) {
          var mhDistance = endCoords.pageX - startCoords.pageX;
          var mvDistance = endCoords.pageY - startCoords.pageY;
          if (lastZoomedPosX) {
            mhDistance = mhDistance + lastZoomedPosX;
          }
          if (lastZoomedPosY) {
            mvDistance = mvDistance + lastZoomedPosY;
          }
          zoomedPosX = mhDistance;
          zoomedPosY = mvDistance;
          var style = "translate3d(".concat(mhDistance, "px, ").concat(mvDistance, "px, 0)");
          if (currentScale) {
            style += " scale3d(".concat(currentScale, ", ").concat(currentScale, ", 1)");
          }
          cssTransform(mediaImage, style);
        }
      },
      swipe: function swipe(evt) {
        if (imageZoomed) {
          return;
        }
        if (doingZoom) {
          doingZoom = false;
          return;
        }
        if (evt.direction == "Left") {
          if (instance.index == instance.elements.length - 1) {
            return resetSlideMove(media);
          }
          instance.nextSlide();
        }
        if (evt.direction == "Right") {
          if (instance.index == 0) {
            return resetSlideMove(media);
          }
          instance.prevSlide();
        }
      }
    });
    instance.events["touch"] = touchInstance;
  }
  var ZoomImages = function() {
    function ZoomImages2(el, slide) {
      var _this = this;
      var onclose = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      _classCallCheck(this, ZoomImages2);
      this.img = el;
      this.slide = slide;
      this.onclose = onclose;
      if (this.img.setZoomEvents) {
        return false;
      }
      this.active = false;
      this.zoomedIn = false;
      this.dragging = false;
      this.currentX = null;
      this.currentY = null;
      this.initialX = null;
      this.initialY = null;
      this.xOffset = 0;
      this.yOffset = 0;
      this.img.addEventListener("mousedown", function(e) {
        return _this.dragStart(e);
      }, false);
      this.img.addEventListener("mouseup", function(e) {
        return _this.dragEnd(e);
      }, false);
      this.img.addEventListener("mousemove", function(e) {
        return _this.drag(e);
      }, false);
      this.img.addEventListener("click", function(e) {
        if (_this.slide.classList.contains("dragging-nav")) {
          _this.zoomOut();
          return false;
        }
        if (!_this.zoomedIn) {
          return _this.zoomIn();
        }
        if (_this.zoomedIn && !_this.dragging) {
          _this.zoomOut();
        }
      }, false);
      this.img.setZoomEvents = true;
    }
    _createClass(ZoomImages2, [{
      key: "zoomIn",
      value: function zoomIn() {
        var winWidth = this.widowWidth();
        if (this.zoomedIn || winWidth <= 768) {
          return;
        }
        var img = this.img;
        img.setAttribute("data-style", img.getAttribute("style"));
        img.style.maxWidth = img.naturalWidth + "px";
        img.style.maxHeight = img.naturalHeight + "px";
        if (img.naturalWidth > winWidth) {
          var centerX = winWidth / 2 - img.naturalWidth / 2;
          this.setTranslate(this.img.parentNode, centerX, 0);
        }
        this.slide.classList.add("zoomed");
        this.zoomedIn = true;
      }
    }, {
      key: "zoomOut",
      value: function zoomOut() {
        this.img.parentNode.setAttribute("style", "");
        this.img.setAttribute("style", this.img.getAttribute("data-style"));
        this.slide.classList.remove("zoomed");
        this.zoomedIn = false;
        this.currentX = null;
        this.currentY = null;
        this.initialX = null;
        this.initialY = null;
        this.xOffset = 0;
        this.yOffset = 0;
        if (this.onclose && typeof this.onclose == "function") {
          this.onclose();
        }
      }
    }, {
      key: "dragStart",
      value: function dragStart(e) {
        e.preventDefault();
        if (!this.zoomedIn) {
          this.active = false;
          return;
        }
        if (e.type === "touchstart") {
          this.initialX = e.touches[0].clientX - this.xOffset;
          this.initialY = e.touches[0].clientY - this.yOffset;
        } else {
          this.initialX = e.clientX - this.xOffset;
          this.initialY = e.clientY - this.yOffset;
        }
        if (e.target === this.img) {
          this.active = true;
          this.img.classList.add("dragging");
        }
      }
    }, {
      key: "dragEnd",
      value: function dragEnd(e) {
        var _this2 = this;
        e.preventDefault();
        this.initialX = this.currentX;
        this.initialY = this.currentY;
        this.active = false;
        setTimeout(function() {
          _this2.dragging = false;
          _this2.img.isDragging = false;
          _this2.img.classList.remove("dragging");
        }, 100);
      }
    }, {
      key: "drag",
      value: function drag(e) {
        if (this.active) {
          e.preventDefault();
          if (e.type === "touchmove") {
            this.currentX = e.touches[0].clientX - this.initialX;
            this.currentY = e.touches[0].clientY - this.initialY;
          } else {
            this.currentX = e.clientX - this.initialX;
            this.currentY = e.clientY - this.initialY;
          }
          this.xOffset = this.currentX;
          this.yOffset = this.currentY;
          this.img.isDragging = true;
          this.dragging = true;
          this.setTranslate(this.img, this.currentX, this.currentY);
        }
      }
    }, {
      key: "onMove",
      value: function onMove(e) {
        if (!this.zoomedIn) {
          return;
        }
        var xOffset = e.clientX - this.img.naturalWidth / 2;
        var yOffset = e.clientY - this.img.naturalHeight / 2;
        this.setTranslate(this.img, xOffset, yOffset);
      }
    }, {
      key: "setTranslate",
      value: function setTranslate(node, xPos, yPos) {
        node.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
      }
    }, {
      key: "widowWidth",
      value: function widowWidth() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      }
    }]);
    return ZoomImages2;
  }();
  var DragSlides = function() {
    function DragSlides2() {
      var _this = this;
      var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, DragSlides2);
      var dragEl = config.dragEl, _config$toleranceX = config.toleranceX, toleranceX = _config$toleranceX === void 0 ? 40 : _config$toleranceX, _config$toleranceY = config.toleranceY, toleranceY = _config$toleranceY === void 0 ? 65 : _config$toleranceY, _config$slide = config.slide, slide = _config$slide === void 0 ? null : _config$slide, _config$instance = config.instance, instance = _config$instance === void 0 ? null : _config$instance;
      this.el = dragEl;
      this.active = false;
      this.dragging = false;
      this.currentX = null;
      this.currentY = null;
      this.initialX = null;
      this.initialY = null;
      this.xOffset = 0;
      this.yOffset = 0;
      this.direction = null;
      this.lastDirection = null;
      this.toleranceX = toleranceX;
      this.toleranceY = toleranceY;
      this.toleranceReached = false;
      this.dragContainer = this.el;
      this.slide = slide;
      this.instance = instance;
      this.el.addEventListener("mousedown", function(e) {
        return _this.dragStart(e);
      }, false);
      this.el.addEventListener("mouseup", function(e) {
        return _this.dragEnd(e);
      }, false);
      this.el.addEventListener("mousemove", function(e) {
        return _this.drag(e);
      }, false);
    }
    _createClass(DragSlides2, [{
      key: "dragStart",
      value: function dragStart(e) {
        if (this.slide.classList.contains("zoomed")) {
          this.active = false;
          return;
        }
        if (e.type === "touchstart") {
          this.initialX = e.touches[0].clientX - this.xOffset;
          this.initialY = e.touches[0].clientY - this.yOffset;
        } else {
          this.initialX = e.clientX - this.xOffset;
          this.initialY = e.clientY - this.yOffset;
        }
        var clicked = e.target.nodeName.toLowerCase();
        var exludeClicks = ["input", "select", "textarea", "button", "a"];
        if (e.target.classList.contains("nodrag") || closest(e.target, ".nodrag") || exludeClicks.indexOf(clicked) !== -1) {
          this.active = false;
          return;
        }
        e.preventDefault();
        if (e.target === this.el || clicked !== "img" && closest(e.target, ".gslide-inline")) {
          this.active = true;
          this.el.classList.add("dragging");
          this.dragContainer = closest(e.target, ".ginner-container");
        }
      }
    }, {
      key: "dragEnd",
      value: function dragEnd(e) {
        var _this2 = this;
        e && e.preventDefault();
        this.initialX = 0;
        this.initialY = 0;
        this.currentX = null;
        this.currentY = null;
        this.initialX = null;
        this.initialY = null;
        this.xOffset = 0;
        this.yOffset = 0;
        this.active = false;
        if (this.doSlideChange) {
          this.instance.preventOutsideClick = true;
          this.doSlideChange == "right" && this.instance.prevSlide();
          this.doSlideChange == "left" && this.instance.nextSlide();
        }
        if (this.doSlideClose) {
          this.instance.close();
        }
        if (!this.toleranceReached) {
          this.setTranslate(this.dragContainer, 0, 0, true);
        }
        setTimeout(function() {
          _this2.instance.preventOutsideClick = false;
          _this2.toleranceReached = false;
          _this2.lastDirection = null;
          _this2.dragging = false;
          _this2.el.isDragging = false;
          _this2.el.classList.remove("dragging");
          _this2.slide.classList.remove("dragging-nav");
          _this2.dragContainer.style.transform = "";
          _this2.dragContainer.style.transition = "";
        }, 100);
      }
    }, {
      key: "drag",
      value: function drag(e) {
        if (this.active) {
          e.preventDefault();
          this.slide.classList.add("dragging-nav");
          if (e.type === "touchmove") {
            this.currentX = e.touches[0].clientX - this.initialX;
            this.currentY = e.touches[0].clientY - this.initialY;
          } else {
            this.currentX = e.clientX - this.initialX;
            this.currentY = e.clientY - this.initialY;
          }
          this.xOffset = this.currentX;
          this.yOffset = this.currentY;
          this.el.isDragging = true;
          this.dragging = true;
          this.doSlideChange = false;
          this.doSlideClose = false;
          var currentXInt = Math.abs(this.currentX);
          var currentYInt = Math.abs(this.currentY);
          if (currentXInt > 0 && currentXInt >= Math.abs(this.currentY) && (!this.lastDirection || this.lastDirection == "x")) {
            this.yOffset = 0;
            this.lastDirection = "x";
            this.setTranslate(this.dragContainer, this.currentX, 0);
            var doChange = this.shouldChange();
            if (!this.instance.settings.dragAutoSnap && doChange) {
              this.doSlideChange = doChange;
            }
            if (this.instance.settings.dragAutoSnap && doChange) {
              this.instance.preventOutsideClick = true;
              this.toleranceReached = true;
              this.active = false;
              this.instance.preventOutsideClick = true;
              this.dragEnd(null);
              doChange == "right" && this.instance.prevSlide();
              doChange == "left" && this.instance.nextSlide();
              return;
            }
          }
          if (this.toleranceY > 0 && currentYInt > 0 && currentYInt >= currentXInt && (!this.lastDirection || this.lastDirection == "y")) {
            this.xOffset = 0;
            this.lastDirection = "y";
            this.setTranslate(this.dragContainer, 0, this.currentY);
            var doClose = this.shouldClose();
            if (!this.instance.settings.dragAutoSnap && doClose) {
              this.doSlideClose = true;
            }
            if (this.instance.settings.dragAutoSnap && doClose) {
              this.instance.close();
            }
            return;
          }
        }
      }
    }, {
      key: "shouldChange",
      value: function shouldChange() {
        var doChange = false;
        var currentXInt = Math.abs(this.currentX);
        if (currentXInt >= this.toleranceX) {
          var dragDir = this.currentX > 0 ? "right" : "left";
          if (dragDir == "left" && this.slide !== this.slide.parentNode.lastChild || dragDir == "right" && this.slide !== this.slide.parentNode.firstChild) {
            doChange = dragDir;
          }
        }
        return doChange;
      }
    }, {
      key: "shouldClose",
      value: function shouldClose() {
        var doClose = false;
        var currentYInt = Math.abs(this.currentY);
        if (currentYInt >= this.toleranceY) {
          doClose = true;
        }
        return doClose;
      }
    }, {
      key: "setTranslate",
      value: function setTranslate(node, xPos, yPos) {
        var animated = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        if (animated) {
          node.style.transition = "all .2s ease";
        } else {
          node.style.transition = "";
        }
        node.style.transform = "translate3d(".concat(xPos, "px, ").concat(yPos, "px, 0)");
      }
    }]);
    return DragSlides2;
  }();
  function slideImage(slide, data, index, callback) {
    var slideMedia = slide.querySelector(".gslide-media");
    var img = new Image();
    var titleID = "gSlideTitle_" + index;
    var textID = "gSlideDesc_" + index;
    img.addEventListener("load", function() {
      if (isFunction(callback)) {
        callback();
      }
    }, false);
    img.src = data.href;
    if (data.sizes != "" && data.srcset != "") {
      img.sizes = data.sizes;
      img.srcset = data.srcset;
    }
    img.alt = "";
    if (!isNil(data.alt) && data.alt !== "") {
      img.alt = data.alt;
    }
    if (data.title !== "") {
      img.setAttribute("aria-labelledby", titleID);
    }
    if (data.description !== "") {
      img.setAttribute("aria-describedby", textID);
    }
    if (data.hasOwnProperty("_hasCustomWidth") && data._hasCustomWidth) {
      img.style.width = data.width;
    }
    if (data.hasOwnProperty("_hasCustomHeight") && data._hasCustomHeight) {
      img.style.height = data.height;
    }
    slideMedia.insertBefore(img, slideMedia.firstChild);
    return;
  }
  function slideVideo(slide, data, index, callback) {
    var _this = this;
    var slideContainer = slide.querySelector(".ginner-container");
    var videoID = "gvideo" + index;
    var slideMedia = slide.querySelector(".gslide-media");
    var videoPlayers = this.getAllPlayers();
    addClass(slideContainer, "gvideo-container");
    slideMedia.insertBefore(createHTML('<div class="gvideo-wrapper"></div>'), slideMedia.firstChild);
    var videoWrapper = slide.querySelector(".gvideo-wrapper");
    injectAssets(this.settings.plyr.css, "Plyr");
    var url = data.href;
    var provider = data === null || data === void 0 ? void 0 : data.videoProvider;
    var customPlaceholder = false;
    slideMedia.style.maxWidth = data.width;
    injectAssets(this.settings.plyr.js, "Plyr", function() {
      if (!provider && url.match(/vimeo\.com\/([0-9]*)/)) {
        provider = "vimeo";
      }
      if (!provider && (url.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || url.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || url.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/))) {
        provider = "youtube";
      }
      if (provider === "local" || !provider) {
        provider = "local";
        var html2 = '<video id="' + videoID + '" ';
        html2 += 'style="background:#000; max-width: '.concat(data.width, ';" ');
        html2 += 'preload="metadata" ';
        html2 += 'x-webkit-airplay="allow" ';
        html2 += "playsinline ";
        html2 += "controls ";
        html2 += 'class="gvideo-local">';
        html2 += '<source src="'.concat(url, '">');
        html2 += "</video>";
        customPlaceholder = createHTML(html2);
      }
      var placeholder = customPlaceholder ? customPlaceholder : createHTML('<div id="'.concat(videoID, '" data-plyr-provider="').concat(provider, '" data-plyr-embed-id="').concat(url, '"></div>'));
      addClass(videoWrapper, "".concat(provider, "-video gvideo"));
      videoWrapper.appendChild(placeholder);
      videoWrapper.setAttribute("data-id", videoID);
      videoWrapper.setAttribute("data-index", index);
      var playerConfig = has(_this.settings.plyr, "config") ? _this.settings.plyr.config : {};
      var player = new Plyr("#" + videoID, playerConfig);
      player.on("ready", function(event) {
        videoPlayers[videoID] = event.detail.plyr;
        if (isFunction(callback)) {
          callback();
        }
      });
      waitUntil(function() {
        return slide.querySelector("iframe") && slide.querySelector("iframe").dataset.ready == "true";
      }, function() {
        _this.resize(slide);
      });
      player.on("enterfullscreen", handleMediaFullScreen);
      player.on("exitfullscreen", handleMediaFullScreen);
    });
  }
  function handleMediaFullScreen(event) {
    var media = closest(event.target, ".gslide-media");
    if (event.type === "enterfullscreen") {
      addClass(media, "fullscreen");
    }
    if (event.type === "exitfullscreen") {
      removeClass(media, "fullscreen");
    }
  }
  function slideInline(slide, data, index, callback) {
    var _this = this;
    var slideMedia = slide.querySelector(".gslide-media");
    var hash = has(data, "href") && data.href ? data.href.split("#").pop().trim() : false;
    var content = has(data, "content") && data.content ? data.content : false;
    var innerContent;
    if (content) {
      if (isString(content)) {
        innerContent = createHTML('<div class="ginlined-content">'.concat(content, "</div>"));
      }
      if (isNode(content)) {
        if (content.style.display == "none") {
          content.style.display = "block";
        }
        var container = document.createElement("div");
        container.className = "ginlined-content";
        container.appendChild(content);
        innerContent = container;
      }
    }
    if (hash) {
      var div = document.getElementById(hash);
      if (!div) {
        return false;
      }
      var cloned = div.cloneNode(true);
      cloned.style.height = data.height;
      cloned.style.maxWidth = data.width;
      addClass(cloned, "ginlined-content");
      innerContent = cloned;
    }
    if (!innerContent) {
      console.error("Unable to append inline slide content", data);
      return false;
    }
    slideMedia.style.height = data.height;
    slideMedia.style.width = data.width;
    slideMedia.appendChild(innerContent);
    this.events["inlineclose" + hash] = addEvent("click", {
      onElement: slideMedia.querySelectorAll(".gtrigger-close"),
      withCallback: function withCallback(e) {
        e.preventDefault();
        _this.close();
      }
    });
    if (isFunction(callback)) {
      callback();
    }
    return;
  }
  function slideIframe(slide, data, index, callback) {
    var slideMedia = slide.querySelector(".gslide-media");
    var iframe = createIframe({
      url: data.href,
      callback
    });
    slideMedia.parentNode.style.maxWidth = data.width;
    slideMedia.parentNode.style.height = data.height;
    slideMedia.appendChild(iframe);
    return;
  }
  var SlideConfigParser = function() {
    function SlideConfigParser2() {
      var slideParamas = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, SlideConfigParser2);
      this.defaults = {
        href: "",
        sizes: "",
        srcset: "",
        title: "",
        type: "",
        videoProvider: "",
        description: "",
        alt: "",
        descPosition: "bottom",
        effect: "",
        width: "",
        height: "",
        content: false,
        zoomable: true,
        draggable: true
      };
      if (isObject(slideParamas)) {
        this.defaults = extend(this.defaults, slideParamas);
      }
    }
    _createClass(SlideConfigParser2, [{
      key: "sourceType",
      value: function sourceType(url) {
        var origin = url;
        url = url.toLowerCase();
        if (url.match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/) !== null) {
          return "image";
        }
        if (url.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || url.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || url.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) {
          return "video";
        }
        if (url.match(/vimeo\.com\/([0-9]*)/)) {
          return "video";
        }
        if (url.match(/\.(mp4|ogg|webm|mov)/) !== null) {
          return "video";
        }
        if (url.match(/\.(mp3|wav|wma|aac|ogg)/) !== null) {
          return "audio";
        }
        if (url.indexOf("#") > -1) {
          var hash = origin.split("#").pop();
          if (hash.trim() !== "") {
            return "inline";
          }
        }
        if (url.indexOf("goajax=true") > -1) {
          return "ajax";
        }
        return "external";
      }
    }, {
      key: "parseConfig",
      value: function parseConfig(element, settings) {
        var _this = this;
        var data = extend({
          descPosition: settings.descPosition
        }, this.defaults);
        if (isObject(element) && !isNode(element)) {
          if (!has(element, "type")) {
            if (has(element, "content") && element.content) {
              element.type = "inline";
            } else if (has(element, "href")) {
              element.type = this.sourceType(element.href);
            }
          }
          var objectData = extend(data, element);
          this.setSize(objectData, settings);
          return objectData;
        }
        var url = "";
        var config = element.getAttribute("data-glightbox");
        var nodeType = element.nodeName.toLowerCase();
        if (nodeType === "a") {
          url = element.href;
        }
        if (nodeType === "img") {
          url = element.src;
          data.alt = element.alt;
        }
        data.href = url;
        each(data, function(val, key) {
          if (has(settings, key) && key !== "width") {
            data[key] = settings[key];
          }
          var nodeData = element.dataset[key];
          if (!isNil(nodeData)) {
            data[key] = _this.sanitizeValue(nodeData);
          }
        });
        if (data.content) {
          data.type = "inline";
        }
        if (!data.type && url) {
          data.type = this.sourceType(url);
        }
        if (!isNil(config)) {
          var cleanKeys = [];
          each(data, function(v, k) {
            cleanKeys.push(";\\s?" + k);
          });
          cleanKeys = cleanKeys.join("\\s?:|");
          if (config.trim() !== "") {
            each(data, function(val, key) {
              var str = config;
              var match = "s?" + key + "s?:s?(.*?)(" + cleanKeys + "s?:|$)";
              var regex = new RegExp(match);
              var matches = str.match(regex);
              if (matches && matches.length && matches[1]) {
                var value = matches[1].trim().replace(/;\s*$/, "");
                data[key] = _this.sanitizeValue(value);
              }
            });
          }
        } else {
          if (!data.title && nodeType == "a") {
            var title = element.title;
            if (!isNil(title) && title !== "") {
              data.title = title;
            }
          }
          if (!data.title && nodeType == "img") {
            var alt = element.alt;
            if (!isNil(alt) && alt !== "") {
              data.title = alt;
            }
          }
        }
        if (data.description && data.description.substring(0, 1) === ".") {
          var description;
          try {
            description = document.querySelector(data.description).innerHTML;
          } catch (error) {
            if (!(error instanceof DOMException)) {
              throw error;
            }
          }
          if (description) {
            data.description = description;
          }
        }
        if (!data.description) {
          var nodeDesc = element.querySelector(".glightbox-desc");
          if (nodeDesc) {
            data.description = nodeDesc.innerHTML;
          }
        }
        this.setSize(data, settings, element);
        this.slideConfig = data;
        return data;
      }
    }, {
      key: "setSize",
      value: function setSize(data, settings) {
        var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        var defaultWith = data.type == "video" ? this.checkSize(settings.videosWidth) : this.checkSize(settings.width);
        var defaultHeight = this.checkSize(settings.height);
        data.width = has(data, "width") && data.width !== "" ? this.checkSize(data.width) : defaultWith;
        data.height = has(data, "height") && data.height !== "" ? this.checkSize(data.height) : defaultHeight;
        if (element && data.type == "image") {
          data._hasCustomWidth = element.dataset.width ? true : false;
          data._hasCustomHeight = element.dataset.height ? true : false;
        }
        return data;
      }
    }, {
      key: "checkSize",
      value: function checkSize(size2) {
        return isNumber(size2) ? "".concat(size2, "px") : size2;
      }
    }, {
      key: "sanitizeValue",
      value: function sanitizeValue(val) {
        if (val !== "true" && val !== "false") {
          return val;
        }
        return val === "true";
      }
    }]);
    return SlideConfigParser2;
  }();
  var Slide = function() {
    function Slide2(el, instance, index) {
      _classCallCheck(this, Slide2);
      this.element = el;
      this.instance = instance;
      this.index = index;
    }
    _createClass(Slide2, [{
      key: "setContent",
      value: function setContent() {
        var _this = this;
        var slide = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        if (hasClass(slide, "loaded")) {
          return false;
        }
        var settings = this.instance.settings;
        var slideConfig = this.slideConfig;
        var isMobileDevice = isMobile();
        if (isFunction(settings.beforeSlideLoad)) {
          settings.beforeSlideLoad({
            index: this.index,
            slide,
            player: false
          });
        }
        var type = slideConfig.type;
        var position = slideConfig.descPosition;
        var slideMedia = slide.querySelector(".gslide-media");
        var slideTitle = slide.querySelector(".gslide-title");
        var slideText = slide.querySelector(".gslide-desc");
        var slideDesc = slide.querySelector(".gdesc-inner");
        var finalCallback = callback;
        var titleID = "gSlideTitle_" + this.index;
        var textID = "gSlideDesc_" + this.index;
        if (isFunction(settings.afterSlideLoad)) {
          finalCallback = function finalCallback2() {
            if (isFunction(callback)) {
              callback();
            }
            settings.afterSlideLoad({
              index: _this.index,
              slide,
              player: _this.instance.getSlidePlayerInstance(_this.index)
            });
          };
        }
        if (slideConfig.title == "" && slideConfig.description == "") {
          if (slideDesc) {
            slideDesc.parentNode.parentNode.removeChild(slideDesc.parentNode);
          }
        } else {
          if (slideTitle && slideConfig.title !== "") {
            slideTitle.id = titleID;
            slideTitle.innerHTML = slideConfig.title;
          } else {
            slideTitle.parentNode.removeChild(slideTitle);
          }
          if (slideText && slideConfig.description !== "") {
            slideText.id = textID;
            if (isMobileDevice && settings.moreLength > 0) {
              slideConfig.smallDescription = this.slideShortDesc(slideConfig.description, settings.moreLength, settings.moreText);
              slideText.innerHTML = slideConfig.smallDescription;
              this.descriptionEvents(slideText, slideConfig);
            } else {
              slideText.innerHTML = slideConfig.description;
            }
          } else {
            slideText.parentNode.removeChild(slideText);
          }
          addClass(slideMedia.parentNode, "desc-".concat(position));
          addClass(slideDesc.parentNode, "description-".concat(position));
        }
        addClass(slideMedia, "gslide-".concat(type));
        addClass(slide, "loaded");
        if (type === "video") {
          slideVideo.apply(this.instance, [slide, slideConfig, this.index, finalCallback]);
          return;
        }
        if (type === "external") {
          slideIframe.apply(this, [slide, slideConfig, this.index, finalCallback]);
          return;
        }
        if (type === "inline") {
          slideInline.apply(this.instance, [slide, slideConfig, this.index, finalCallback]);
          if (slideConfig.draggable) {
            new DragSlides({
              dragEl: slide.querySelector(".gslide-inline"),
              toleranceX: settings.dragToleranceX,
              toleranceY: settings.dragToleranceY,
              slide,
              instance: this.instance
            });
          }
          return;
        }
        if (type === "image") {
          slideImage(slide, slideConfig, this.index, function() {
            var img = slide.querySelector("img");
            if (slideConfig.draggable) {
              new DragSlides({
                dragEl: img,
                toleranceX: settings.dragToleranceX,
                toleranceY: settings.dragToleranceY,
                slide,
                instance: _this.instance
              });
            }
            if (slideConfig.zoomable && img.naturalWidth > img.offsetWidth) {
              addClass(img, "zoomable");
              new ZoomImages(img, slide, function() {
                _this.instance.resize();
              });
            }
            if (isFunction(finalCallback)) {
              finalCallback();
            }
          });
          return;
        }
        if (isFunction(finalCallback)) {
          finalCallback();
        }
      }
    }, {
      key: "slideShortDesc",
      value: function slideShortDesc(string) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 50;
        var wordBoundary = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        var div = document.createElement("div");
        div.innerHTML = string;
        var cleanedString = div.innerText;
        var useWordBoundary = wordBoundary;
        string = cleanedString.trim();
        if (string.length <= n) {
          return string;
        }
        var subString = string.substr(0, n - 1);
        if (!useWordBoundary) {
          return subString;
        }
        div = null;
        return subString + '... <a href="#" class="desc-more">' + wordBoundary + "</a>";
      }
    }, {
      key: "descriptionEvents",
      value: function descriptionEvents(desc, data) {
        var _this2 = this;
        var moreLink = desc.querySelector(".desc-more");
        if (!moreLink) {
          return false;
        }
        addEvent("click", {
          onElement: moreLink,
          withCallback: function withCallback(event, target) {
            event.preventDefault();
            var body = document.body;
            var desc2 = closest(target, ".gslide-desc");
            if (!desc2) {
              return false;
            }
            desc2.innerHTML = data.description;
            addClass(body, "gdesc-open");
            var shortEvent = addEvent("click", {
              onElement: [body, closest(desc2, ".gslide-description")],
              withCallback: function withCallback2(event2, target2) {
                if (event2.target.nodeName.toLowerCase() !== "a") {
                  removeClass(body, "gdesc-open");
                  addClass(body, "gdesc-closed");
                  desc2.innerHTML = data.smallDescription;
                  _this2.descriptionEvents(desc2, data);
                  setTimeout(function() {
                    removeClass(body, "gdesc-closed");
                  }, 400);
                  shortEvent.destroy();
                }
              }
            });
          }
        });
      }
    }, {
      key: "create",
      value: function create() {
        return createHTML(this.instance.settings.slideHTML);
      }
    }, {
      key: "getConfig",
      value: function getConfig() {
        if (!isNode(this.element) && !this.element.hasOwnProperty("draggable")) {
          this.element.draggable = this.instance.settings.draggable;
        }
        var parser = new SlideConfigParser(this.instance.settings.slideExtraAttributes);
        this.slideConfig = parser.parseConfig(this.element, this.instance.settings);
        return this.slideConfig;
      }
    }]);
    return Slide2;
  }();
  var _version = "3.1.0";
  var isMobile$1 = isMobile();
  var isTouch$1 = isTouch();
  var html = document.getElementsByTagName("html")[0];
  var defaults = {
    selector: ".glightbox",
    elements: null,
    skin: "clean",
    theme: "clean",
    closeButton: true,
    startAt: null,
    autoplayVideos: true,
    autofocusVideos: true,
    descPosition: "bottom",
    width: "900px",
    height: "506px",
    videosWidth: "960px",
    beforeSlideChange: null,
    afterSlideChange: null,
    beforeSlideLoad: null,
    afterSlideLoad: null,
    slideInserted: null,
    slideRemoved: null,
    slideExtraAttributes: null,
    onOpen: null,
    onClose: null,
    loop: false,
    zoomable: true,
    draggable: true,
    dragAutoSnap: false,
    dragToleranceX: 40,
    dragToleranceY: 65,
    preload: true,
    oneSlidePerOpen: false,
    touchNavigation: true,
    touchFollowAxis: true,
    keyboardNavigation: true,
    closeOnOutsideClick: true,
    plugins: false,
    plyr: {
      css: "https://cdn.plyr.io/3.6.12/plyr.css",
      js: "https://cdn.plyr.io/3.6.12/plyr.js",
      config: {
        ratio: "16:9",
        fullscreen: {
          enabled: true,
          iosNative: true
        },
        youtube: {
          noCookie: true,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3
        },
        vimeo: {
          byline: false,
          portrait: false,
          title: false,
          transparent: false
        }
      }
    },
    openEffect: "zoom",
    closeEffect: "zoom",
    slideEffect: "slide",
    moreText: "See more",
    moreLength: 60,
    cssEfects: {
      fade: {
        "in": "fadeIn",
        out: "fadeOut"
      },
      zoom: {
        "in": "zoomIn",
        out: "zoomOut"
      },
      slide: {
        "in": "slideInRight",
        out: "slideOutLeft"
      },
      slideBack: {
        "in": "slideInLeft",
        out: "slideOutRight"
      },
      none: {
        "in": "none",
        out: "none"
      }
    },
    svg: {
      close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
      next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
      prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
    }
  };
  defaults.slideHTML = '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>';
  defaults.lightboxHTML = '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>';
  var GlightboxInit = function() {
    function GlightboxInit2() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, GlightboxInit2);
      this.customOptions = options;
      this.settings = extend(defaults, options);
      this.effectsClasses = this.getAnimationClasses();
      this.videoPlayers = {};
      this.apiEvents = [];
      this.fullElementsList = false;
    }
    _createClass(GlightboxInit2, [{
      key: "init",
      value: function init() {
        var _this = this;
        var selector = this.getSelector();
        if (selector) {
          this.baseEvents = addEvent("click", {
            onElement: selector,
            withCallback: function withCallback(e, target) {
              e.preventDefault();
              _this.open(target);
            }
          });
        }
        this.elements = this.getElements();
      }
    }, {
      key: "open",
      value: function open() {
        var element = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        var startAt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        if (this.elements.length === 0) {
          return false;
        }
        this.activeSlide = null;
        this.prevActiveSlideIndex = null;
        this.prevActiveSlide = null;
        var index = isNumber(startAt) ? startAt : this.settings.startAt;
        if (isNode(element)) {
          var gallery = element.getAttribute("data-gallery");
          if (gallery) {
            this.fullElementsList = this.elements;
            this.elements = this.getGalleryElements(this.elements, gallery);
          }
          if (isNil(index)) {
            index = this.getElementIndex(element);
            if (index < 0) {
              index = 0;
            }
          }
        }
        if (!isNumber(index)) {
          index = 0;
        }
        this.build();
        animateElement(this.overlay, this.settings.openEffect === "none" ? "none" : this.settings.cssEfects.fade["in"]);
        var body = document.body;
        var scrollBar = window.innerWidth - document.documentElement.clientWidth;
        if (scrollBar > 0) {
          var styleSheet = document.createElement("style");
          styleSheet.type = "text/css";
          styleSheet.className = "gcss-styles";
          styleSheet.innerText = ".gscrollbar-fixer {margin-right: ".concat(scrollBar, "px}");
          document.head.appendChild(styleSheet);
          addClass(body, "gscrollbar-fixer");
        }
        addClass(body, "glightbox-open");
        addClass(html, "glightbox-open");
        if (isMobile$1) {
          addClass(document.body, "glightbox-mobile");
          this.settings.slideEffect = "slide";
        }
        this.showSlide(index, true);
        if (this.elements.length === 1) {
          addClass(this.prevButton, "glightbox-button-hidden");
          addClass(this.nextButton, "glightbox-button-hidden");
        } else {
          removeClass(this.prevButton, "glightbox-button-hidden");
          removeClass(this.nextButton, "glightbox-button-hidden");
        }
        this.lightboxOpen = true;
        this.trigger("open");
        if (isFunction(this.settings.onOpen)) {
          this.settings.onOpen();
        }
        if (isTouch$1 && this.settings.touchNavigation) {
          touchNavigation(this);
        }
        if (this.settings.keyboardNavigation) {
          keyboardNavigation(this);
        }
      }
    }, {
      key: "openAt",
      value: function openAt() {
        var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        this.open(null, index);
      }
    }, {
      key: "showSlide",
      value: function showSlide() {
        var _this2 = this;
        var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var first = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        show(this.loader);
        this.index = parseInt(index);
        var current = this.slidesContainer.querySelector(".current");
        if (current) {
          removeClass(current, "current");
        }
        this.slideAnimateOut();
        var slideNode = this.slidesContainer.querySelectorAll(".gslide")[index];
        if (hasClass(slideNode, "loaded")) {
          this.slideAnimateIn(slideNode, first);
          hide(this.loader);
        } else {
          show(this.loader);
          var slide = this.elements[index];
          var slideData = {
            index: this.index,
            slide: slideNode,
            slideNode,
            slideConfig: slide.slideConfig,
            slideIndex: this.index,
            trigger: slide.node,
            player: null
          };
          this.trigger("slide_before_load", slideData);
          slide.instance.setContent(slideNode, function() {
            hide(_this2.loader);
            _this2.resize();
            _this2.slideAnimateIn(slideNode, first);
            _this2.trigger("slide_after_load", slideData);
          });
        }
        this.slideDescription = slideNode.querySelector(".gslide-description");
        this.slideDescriptionContained = this.slideDescription && hasClass(this.slideDescription.parentNode, "gslide-media");
        if (this.settings.preload) {
          this.preloadSlide(index + 1);
          this.preloadSlide(index - 1);
        }
        this.updateNavigationClasses();
        this.activeSlide = slideNode;
      }
    }, {
      key: "preloadSlide",
      value: function preloadSlide(index) {
        var _this3 = this;
        if (index < 0 || index > this.elements.length - 1) {
          return false;
        }
        if (isNil(this.elements[index])) {
          return false;
        }
        var slideNode = this.slidesContainer.querySelectorAll(".gslide")[index];
        if (hasClass(slideNode, "loaded")) {
          return false;
        }
        var slide = this.elements[index];
        var type = slide.type;
        var slideData = {
          index,
          slide: slideNode,
          slideNode,
          slideConfig: slide.slideConfig,
          slideIndex: index,
          trigger: slide.node,
          player: null
        };
        this.trigger("slide_before_load", slideData);
        if (type === "video" || type === "external") {
          setTimeout(function() {
            slide.instance.setContent(slideNode, function() {
              _this3.trigger("slide_after_load", slideData);
            });
          }, 200);
        } else {
          slide.instance.setContent(slideNode, function() {
            _this3.trigger("slide_after_load", slideData);
          });
        }
      }
    }, {
      key: "prevSlide",
      value: function prevSlide() {
        this.goToSlide(this.index - 1);
      }
    }, {
      key: "nextSlide",
      value: function nextSlide() {
        this.goToSlide(this.index + 1);
      }
    }, {
      key: "goToSlide",
      value: function goToSlide() {
        var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        this.prevActiveSlide = this.activeSlide;
        this.prevActiveSlideIndex = this.index;
        if (!this.loop() && (index < 0 || index > this.elements.length - 1)) {
          return false;
        }
        if (index < 0) {
          index = this.elements.length - 1;
        } else if (index >= this.elements.length) {
          index = 0;
        }
        this.showSlide(index);
      }
    }, {
      key: "insertSlide",
      value: function insertSlide() {
        var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var index = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
        if (index < 0) {
          index = this.elements.length;
        }
        var slide = new Slide(config, this, index);
        var data = slide.getConfig();
        var slideInfo = extend({}, data);
        var newSlide = slide.create();
        var totalSlides = this.elements.length - 1;
        slideInfo.index = index;
        slideInfo.node = false;
        slideInfo.instance = slide;
        slideInfo.slideConfig = data;
        this.elements.splice(index, 0, slideInfo);
        var addedSlideNode = null;
        var addedSlidePlayer = null;
        if (this.slidesContainer) {
          if (index > totalSlides) {
            this.slidesContainer.appendChild(newSlide);
          } else {
            var existingSlide = this.slidesContainer.querySelectorAll(".gslide")[index];
            this.slidesContainer.insertBefore(newSlide, existingSlide);
          }
          if (this.settings.preload && this.index == 0 && index == 0 || this.index - 1 == index || this.index + 1 == index) {
            this.preloadSlide(index);
          }
          if (this.index === 0 && index === 0) {
            this.index = 1;
          }
          this.updateNavigationClasses();
          addedSlideNode = this.slidesContainer.querySelectorAll(".gslide")[index];
          addedSlidePlayer = this.getSlidePlayerInstance(index);
          slideInfo.slideNode = addedSlideNode;
        }
        this.trigger("slide_inserted", {
          index,
          slide: addedSlideNode,
          slideNode: addedSlideNode,
          slideConfig: data,
          slideIndex: index,
          trigger: null,
          player: addedSlidePlayer
        });
        if (isFunction(this.settings.slideInserted)) {
          this.settings.slideInserted({
            index,
            slide: addedSlideNode,
            player: addedSlidePlayer
          });
        }
      }
    }, {
      key: "removeSlide",
      value: function removeSlide() {
        var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
        if (index < 0 || index > this.elements.length - 1) {
          return false;
        }
        var slide = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[index];
        if (slide) {
          if (this.getActiveSlideIndex() == index) {
            if (index == this.elements.length - 1) {
              this.prevSlide();
            } else {
              this.nextSlide();
            }
          }
          slide.parentNode.removeChild(slide);
        }
        this.elements.splice(index, 1);
        this.trigger("slide_removed", index);
        if (isFunction(this.settings.slideRemoved)) {
          this.settings.slideRemoved(index);
        }
      }
    }, {
      key: "slideAnimateIn",
      value: function slideAnimateIn(slide, first) {
        var _this4 = this;
        var slideMedia = slide.querySelector(".gslide-media");
        var slideDesc = slide.querySelector(".gslide-description");
        var prevData = {
          index: this.prevActiveSlideIndex,
          slide: this.prevActiveSlide,
          slideNode: this.prevActiveSlide,
          slideIndex: this.prevActiveSlide,
          slideConfig: isNil(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
          trigger: isNil(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
          player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
        };
        var nextData = {
          index: this.index,
          slide: this.activeSlide,
          slideNode: this.activeSlide,
          slideConfig: this.elements[this.index].slideConfig,
          slideIndex: this.index,
          trigger: this.elements[this.index].node,
          player: this.getSlidePlayerInstance(this.index)
        };
        if (slideMedia.offsetWidth > 0 && slideDesc) {
          hide(slideDesc);
          slideDesc.style.display = "";
        }
        removeClass(slide, this.effectsClasses);
        if (first) {
          animateElement(slide, this.settings.cssEfects[this.settings.openEffect]["in"], function() {
            if (_this4.settings.autoplayVideos) {
              _this4.slidePlayerPlay(slide);
            }
            _this4.trigger("slide_changed", {
              prev: prevData,
              current: nextData
            });
            if (isFunction(_this4.settings.afterSlideChange)) {
              _this4.settings.afterSlideChange.apply(_this4, [prevData, nextData]);
            }
          });
        } else {
          var effectName = this.settings.slideEffect;
          var animIn = effectName !== "none" ? this.settings.cssEfects[effectName]["in"] : effectName;
          if (this.prevActiveSlideIndex > this.index) {
            if (this.settings.slideEffect == "slide") {
              animIn = this.settings.cssEfects.slideBack["in"];
            }
          }
          animateElement(slide, animIn, function() {
            if (_this4.settings.autoplayVideos) {
              _this4.slidePlayerPlay(slide);
            }
            _this4.trigger("slide_changed", {
              prev: prevData,
              current: nextData
            });
            if (isFunction(_this4.settings.afterSlideChange)) {
              _this4.settings.afterSlideChange.apply(_this4, [prevData, nextData]);
            }
          });
        }
        setTimeout(function() {
          _this4.resize(slide);
        }, 100);
        addClass(slide, "current");
      }
    }, {
      key: "slideAnimateOut",
      value: function slideAnimateOut() {
        if (!this.prevActiveSlide) {
          return false;
        }
        var prevSlide = this.prevActiveSlide;
        removeClass(prevSlide, this.effectsClasses);
        addClass(prevSlide, "prev");
        var animation = this.settings.slideEffect;
        var animOut = animation !== "none" ? this.settings.cssEfects[animation].out : animation;
        this.slidePlayerPause(prevSlide);
        this.trigger("slide_before_change", {
          prev: {
            index: this.prevActiveSlideIndex,
            slide: this.prevActiveSlide,
            slideNode: this.prevActiveSlide,
            slideIndex: this.prevActiveSlideIndex,
            slideConfig: isNil(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
            trigger: isNil(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
          },
          current: {
            index: this.index,
            slide: this.activeSlide,
            slideNode: this.activeSlide,
            slideIndex: this.index,
            slideConfig: this.elements[this.index].slideConfig,
            trigger: this.elements[this.index].node,
            player: this.getSlidePlayerInstance(this.index)
          }
        });
        if (isFunction(this.settings.beforeSlideChange)) {
          this.settings.beforeSlideChange.apply(this, [{
            index: this.prevActiveSlideIndex,
            slide: this.prevActiveSlide,
            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
          }, {
            index: this.index,
            slide: this.activeSlide,
            player: this.getSlidePlayerInstance(this.index)
          }]);
        }
        if (this.prevActiveSlideIndex > this.index && this.settings.slideEffect == "slide") {
          animOut = this.settings.cssEfects.slideBack.out;
        }
        animateElement(prevSlide, animOut, function() {
          var container = prevSlide.querySelector(".ginner-container");
          var media = prevSlide.querySelector(".gslide-media");
          var desc = prevSlide.querySelector(".gslide-description");
          container.style.transform = "";
          media.style.transform = "";
          removeClass(media, "greset");
          media.style.opacity = "";
          if (desc) {
            desc.style.opacity = "";
          }
          removeClass(prevSlide, "prev");
        });
      }
    }, {
      key: "getAllPlayers",
      value: function getAllPlayers() {
        return this.videoPlayers;
      }
    }, {
      key: "getSlidePlayerInstance",
      value: function getSlidePlayerInstance(index) {
        var id = "gvideo" + index;
        var videoPlayers = this.getAllPlayers();
        if (has(videoPlayers, id) && videoPlayers[id]) {
          return videoPlayers[id];
        }
        return false;
      }
    }, {
      key: "stopSlideVideo",
      value: function stopSlideVideo(slide) {
        if (isNode(slide)) {
          var node = slide.querySelector(".gvideo-wrapper");
          if (node) {
            slide = node.getAttribute("data-index");
          }
        }
        console.log("stopSlideVideo is deprecated, use slidePlayerPause");
        var player = this.getSlidePlayerInstance(slide);
        if (player && player.playing) {
          player.pause();
        }
      }
    }, {
      key: "slidePlayerPause",
      value: function slidePlayerPause(slide) {
        if (isNode(slide)) {
          var node = slide.querySelector(".gvideo-wrapper");
          if (node) {
            slide = node.getAttribute("data-index");
          }
        }
        var player = this.getSlidePlayerInstance(slide);
        if (player && player.playing) {
          player.pause();
        }
      }
    }, {
      key: "playSlideVideo",
      value: function playSlideVideo(slide) {
        if (isNode(slide)) {
          var node = slide.querySelector(".gvideo-wrapper");
          if (node) {
            slide = node.getAttribute("data-index");
          }
        }
        console.log("playSlideVideo is deprecated, use slidePlayerPlay");
        var player = this.getSlidePlayerInstance(slide);
        if (player && !player.playing) {
          player.play();
        }
      }
    }, {
      key: "slidePlayerPlay",
      value: function slidePlayerPlay(slide) {
        var _this$settings$plyr$c;
        if (isMobile$1 && !((_this$settings$plyr$c = this.settings.plyr.config) !== null && _this$settings$plyr$c !== void 0 && _this$settings$plyr$c.muted)) {
          return;
        }
        if (isNode(slide)) {
          var node = slide.querySelector(".gvideo-wrapper");
          if (node) {
            slide = node.getAttribute("data-index");
          }
        }
        var player = this.getSlidePlayerInstance(slide);
        if (player && !player.playing) {
          player.play();
          if (this.settings.autofocusVideos) {
            player.elements.container.focus();
          }
        }
      }
    }, {
      key: "setElements",
      value: function setElements(elements) {
        var _this5 = this;
        this.settings.elements = false;
        var newElements = [];
        if (elements && elements.length) {
          each(elements, function(el, i) {
            var slide = new Slide(el, _this5, i);
            var data = slide.getConfig();
            var slideInfo = extend({}, data);
            slideInfo.slideConfig = data;
            slideInfo.instance = slide;
            slideInfo.index = i;
            newElements.push(slideInfo);
          });
        }
        this.elements = newElements;
        if (this.lightboxOpen) {
          this.slidesContainer.innerHTML = "";
          if (this.elements.length) {
            each(this.elements, function() {
              var slide = createHTML(_this5.settings.slideHTML);
              _this5.slidesContainer.appendChild(slide);
            });
            this.showSlide(0, true);
          }
        }
      }
    }, {
      key: "getElementIndex",
      value: function getElementIndex(node) {
        var index = false;
        each(this.elements, function(el, i) {
          if (has(el, "node") && el.node == node) {
            index = i;
            return true;
          }
        });
        return index;
      }
    }, {
      key: "getElements",
      value: function getElements() {
        var _this6 = this;
        var list = [];
        this.elements = this.elements ? this.elements : [];
        if (!isNil(this.settings.elements) && isArray(this.settings.elements) && this.settings.elements.length) {
          each(this.settings.elements, function(el, i) {
            var slide = new Slide(el, _this6, i);
            var elData = slide.getConfig();
            var slideInfo = extend({}, elData);
            slideInfo.node = false;
            slideInfo.index = i;
            slideInfo.instance = slide;
            slideInfo.slideConfig = elData;
            list.push(slideInfo);
          });
        }
        var nodes = false;
        var selector = this.getSelector();
        if (selector) {
          nodes = document.querySelectorAll(this.getSelector());
        }
        if (!nodes) {
          return list;
        }
        each(nodes, function(el, i) {
          var slide = new Slide(el, _this6, i);
          var elData = slide.getConfig();
          var slideInfo = extend({}, elData);
          slideInfo.node = el;
          slideInfo.index = i;
          slideInfo.instance = slide;
          slideInfo.slideConfig = elData;
          slideInfo.gallery = el.getAttribute("data-gallery");
          list.push(slideInfo);
        });
        return list;
      }
    }, {
      key: "getGalleryElements",
      value: function getGalleryElements(list, gallery) {
        return list.filter(function(el) {
          return el.gallery == gallery;
        });
      }
    }, {
      key: "getSelector",
      value: function getSelector() {
        if (this.settings.elements) {
          return false;
        }
        if (this.settings.selector && this.settings.selector.substring(0, 5) == "data-") {
          return "*[".concat(this.settings.selector, "]");
        }
        return this.settings.selector;
      }
    }, {
      key: "getActiveSlide",
      value: function getActiveSlide() {
        return this.slidesContainer.querySelectorAll(".gslide")[this.index];
      }
    }, {
      key: "getActiveSlideIndex",
      value: function getActiveSlideIndex() {
        return this.index;
      }
    }, {
      key: "getAnimationClasses",
      value: function getAnimationClasses() {
        var effects = [];
        for (var key in this.settings.cssEfects) {
          if (this.settings.cssEfects.hasOwnProperty(key)) {
            var effect = this.settings.cssEfects[key];
            effects.push("g".concat(effect["in"]));
            effects.push("g".concat(effect.out));
          }
        }
        return effects.join(" ");
      }
    }, {
      key: "build",
      value: function build() {
        var _this7 = this;
        if (this.built) {
          return false;
        }
        var children = document.body.childNodes;
        var bodyChildElms = [];
        each(children, function(el) {
          if (el.parentNode == document.body && el.nodeName.charAt(0) !== "#" && el.hasAttribute && !el.hasAttribute("aria-hidden")) {
            bodyChildElms.push(el);
            el.setAttribute("aria-hidden", "true");
          }
        });
        var nextSVG = has(this.settings.svg, "next") ? this.settings.svg.next : "";
        var prevSVG = has(this.settings.svg, "prev") ? this.settings.svg.prev : "";
        var closeSVG = has(this.settings.svg, "close") ? this.settings.svg.close : "";
        var lightboxHTML = this.settings.lightboxHTML;
        lightboxHTML = lightboxHTML.replace(/{nextSVG}/g, nextSVG);
        lightboxHTML = lightboxHTML.replace(/{prevSVG}/g, prevSVG);
        lightboxHTML = lightboxHTML.replace(/{closeSVG}/g, closeSVG);
        lightboxHTML = createHTML(lightboxHTML);
        document.body.appendChild(lightboxHTML);
        var modal = document.getElementById("glightbox-body");
        this.modal = modal;
        var closeButton = modal.querySelector(".gclose");
        this.prevButton = modal.querySelector(".gprev");
        this.nextButton = modal.querySelector(".gnext");
        this.overlay = modal.querySelector(".goverlay");
        this.loader = modal.querySelector(".gloader");
        this.slidesContainer = document.getElementById("glightbox-slider");
        this.bodyHiddenChildElms = bodyChildElms;
        this.events = {};
        addClass(this.modal, "glightbox-" + this.settings.skin);
        if (this.settings.closeButton && closeButton) {
          this.events["close"] = addEvent("click", {
            onElement: closeButton,
            withCallback: function withCallback(e, target) {
              e.preventDefault();
              _this7.close();
            }
          });
        }
        if (closeButton && !this.settings.closeButton) {
          closeButton.parentNode.removeChild(closeButton);
        }
        if (this.nextButton) {
          this.events["next"] = addEvent("click", {
            onElement: this.nextButton,
            withCallback: function withCallback(e, target) {
              e.preventDefault();
              _this7.nextSlide();
            }
          });
        }
        if (this.prevButton) {
          this.events["prev"] = addEvent("click", {
            onElement: this.prevButton,
            withCallback: function withCallback(e, target) {
              e.preventDefault();
              _this7.prevSlide();
            }
          });
        }
        if (this.settings.closeOnOutsideClick) {
          this.events["outClose"] = addEvent("click", {
            onElement: modal,
            withCallback: function withCallback(e, target) {
              if (!_this7.preventOutsideClick && !hasClass(document.body, "glightbox-mobile") && !closest(e.target, ".ginner-container")) {
                if (!closest(e.target, ".gbtn") && !hasClass(e.target, "gnext") && !hasClass(e.target, "gprev")) {
                  _this7.close();
                }
              }
            }
          });
        }
        each(this.elements, function(slide, i) {
          _this7.slidesContainer.appendChild(slide.instance.create());
          slide.slideNode = _this7.slidesContainer.querySelectorAll(".gslide")[i];
        });
        if (isTouch$1) {
          addClass(document.body, "glightbox-touch");
        }
        this.events["resize"] = addEvent("resize", {
          onElement: window,
          withCallback: function withCallback() {
            _this7.resize();
          }
        });
        this.built = true;
      }
    }, {
      key: "resize",
      value: function resize() {
        var slide = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        slide = !slide ? this.activeSlide : slide;
        if (!slide || hasClass(slide, "zoomed")) {
          return;
        }
        var winSize = windowSize();
        var video = slide.querySelector(".gvideo-wrapper");
        var image = slide.querySelector(".gslide-image");
        var description = this.slideDescription;
        var winWidth = winSize.width;
        var winHeight = winSize.height;
        if (winWidth <= 768) {
          addClass(document.body, "glightbox-mobile");
        } else {
          removeClass(document.body, "glightbox-mobile");
        }
        if (!video && !image) {
          return;
        }
        var descriptionResize = false;
        if (description && (hasClass(description, "description-bottom") || hasClass(description, "description-top")) && !hasClass(description, "gabsolute")) {
          descriptionResize = true;
        }
        if (image) {
          if (winWidth <= 768) {
            image.querySelector("img");
          } else if (descriptionResize) {
            var descHeight = description.offsetHeight;
            var _imgNode = image.querySelector("img");
            _imgNode.setAttribute("style", "max-height: calc(100vh - ".concat(descHeight, "px)"));
            description.setAttribute("style", "max-width: ".concat(_imgNode.offsetWidth, "px;"));
          }
        }
        if (video) {
          var ratio = has(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
          if (!ratio) {
            var containerWidth = video.clientWidth;
            var containerHeight = video.clientHeight;
            var divisor = containerWidth / containerHeight;
            ratio = "".concat(containerWidth / divisor, ":").concat(containerHeight / divisor);
          }
          var videoRatio = ratio.split(":");
          var videoWidth = this.settings.videosWidth;
          var maxWidth = this.settings.videosWidth;
          if (isNumber(videoWidth) || videoWidth.indexOf("px") !== -1) {
            maxWidth = parseInt(videoWidth);
          } else {
            if (videoWidth.indexOf("vw") !== -1) {
              maxWidth = winWidth * parseInt(videoWidth) / 100;
            } else if (videoWidth.indexOf("vh") !== -1) {
              maxWidth = winHeight * parseInt(videoWidth) / 100;
            } else if (videoWidth.indexOf("%") !== -1) {
              maxWidth = winWidth * parseInt(videoWidth) / 100;
            } else {
              maxWidth = parseInt(video.clientWidth);
            }
          }
          var maxHeight = maxWidth / (parseInt(videoRatio[0]) / parseInt(videoRatio[1]));
          maxHeight = Math.floor(maxHeight);
          if (descriptionResize) {
            winHeight = winHeight - description.offsetHeight;
          }
          if (maxWidth > winWidth || maxHeight > winHeight || winHeight < maxHeight && winWidth > maxWidth) {
            var vwidth = video.offsetWidth;
            var vheight = video.offsetHeight;
            var _ratio = winHeight / vheight;
            var vsize = {
              width: vwidth * _ratio,
              height: vheight * _ratio
            };
            video.parentNode.setAttribute("style", "max-width: ".concat(vsize.width, "px"));
            if (descriptionResize) {
              description.setAttribute("style", "max-width: ".concat(vsize.width, "px;"));
            }
          } else {
            video.parentNode.style.maxWidth = "".concat(videoWidth);
            if (descriptionResize) {
              description.setAttribute("style", "max-width: ".concat(videoWidth, ";"));
            }
          }
        }
      }
    }, {
      key: "reload",
      value: function reload() {
        this.init();
      }
    }, {
      key: "updateNavigationClasses",
      value: function updateNavigationClasses() {
        var loop = this.loop();
        removeClass(this.nextButton, "disabled");
        removeClass(this.prevButton, "disabled");
        if (this.index == 0 && this.elements.length - 1 == 0) {
          addClass(this.prevButton, "disabled");
          addClass(this.nextButton, "disabled");
        } else if (this.index === 0 && !loop) {
          addClass(this.prevButton, "disabled");
        } else if (this.index === this.elements.length - 1 && !loop) {
          addClass(this.nextButton, "disabled");
        }
      }
    }, {
      key: "loop",
      value: function loop() {
        var loop2 = has(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
        loop2 = has(this.settings, "loop") ? this.settings.loop : loop2;
        return loop2;
      }
    }, {
      key: "close",
      value: function close() {
        var _this8 = this;
        if (!this.lightboxOpen) {
          if (this.events) {
            for (var key in this.events) {
              if (this.events.hasOwnProperty(key)) {
                this.events[key].destroy();
              }
            }
            this.events = null;
          }
          return false;
        }
        if (this.closing) {
          return false;
        }
        this.closing = true;
        this.slidePlayerPause(this.activeSlide);
        if (this.fullElementsList) {
          this.elements = this.fullElementsList;
        }
        if (this.bodyHiddenChildElms.length) {
          each(this.bodyHiddenChildElms, function(el) {
            el.removeAttribute("aria-hidden");
          });
        }
        addClass(this.modal, "glightbox-closing");
        animateElement(this.overlay, this.settings.openEffect == "none" ? "none" : this.settings.cssEfects.fade.out);
        animateElement(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function() {
          _this8.activeSlide = null;
          _this8.prevActiveSlideIndex = null;
          _this8.prevActiveSlide = null;
          _this8.built = false;
          if (_this8.events) {
            for (var _key in _this8.events) {
              if (_this8.events.hasOwnProperty(_key)) {
                _this8.events[_key].destroy();
              }
            }
            _this8.events = null;
          }
          var body = document.body;
          removeClass(html, "glightbox-open");
          removeClass(body, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer");
          _this8.modal.parentNode.removeChild(_this8.modal);
          _this8.trigger("close");
          if (isFunction(_this8.settings.onClose)) {
            _this8.settings.onClose();
          }
          var styles = document.querySelector(".gcss-styles");
          if (styles) {
            styles.parentNode.removeChild(styles);
          }
          _this8.lightboxOpen = false;
          _this8.closing = null;
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.close();
        this.clearAllEvents();
        if (this.baseEvents) {
          this.baseEvents.destroy();
        }
      }
    }, {
      key: "on",
      value: function on(evt, callback) {
        var once = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        if (!evt || !isFunction(callback)) {
          throw new TypeError("Event name and callback must be defined");
        }
        this.apiEvents.push({
          evt,
          once,
          callback
        });
      }
    }, {
      key: "once",
      value: function once(evt, callback) {
        this.on(evt, callback, true);
      }
    }, {
      key: "trigger",
      value: function trigger(eventName) {
        var _this9 = this;
        var data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        var onceTriggered = [];
        each(this.apiEvents, function(event, i) {
          var evt = event.evt, once = event.once, callback = event.callback;
          if (evt == eventName) {
            callback(data);
            if (once) {
              onceTriggered.push(i);
            }
          }
        });
        if (onceTriggered.length) {
          each(onceTriggered, function(i) {
            return _this9.apiEvents.splice(i, 1);
          });
        }
      }
    }, {
      key: "clearAllEvents",
      value: function clearAllEvents() {
        this.apiEvents.splice(0, this.apiEvents.length);
      }
    }, {
      key: "version",
      value: function version() {
        return _version;
      }
    }]);
    return GlightboxInit2;
  }();
  function glightbox2() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var instance = new GlightboxInit(options);
    instance.init();
    return instance;
  }
  return glightbox2;
});
window.onload = async () => {
  await loadAlbum();
};
async function loadAlbum() {
  const res = await fetch("/album");
  const datas = await res.json();
  console.log(datas);
  if (res.ok) {
    let html = "";
    for (let data of datas) {
      html += `
            <div class="photo-conatiner">
            <img class="photo" src="../uploads/${data.image_source}" alt="image" />
            <div class="delete-btn" data_index="${data.image_source}">
                <i class="fa-solid fa-trash" data_index="${data.image_source}"></i>
            </div>
            </div>`;
    }
    const albumContainer = document.querySelector(".gallery-Container");
    albumContainer.innerHTML = html;
  }
  const galleryContainers = document.querySelectorAll(".photo-conatiner");
  for (let galleryContainer of galleryContainers) {
    const photoDiv = galleryContainer;
    const deleteBtn = photoDiv.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", async (e) => {
      const element = e.target;
      const data_index = element.getAttribute("data_index");
      console.log(data_index);
      const res2 = await fetch("/album", {
        method: "DELETE",
        body: JSON.stringify({
          index: data_index
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (res2.ok) {
        loadAlbum();
      }
    });
  }
  console.log("Albums loaded successfully");
}
const memowallFormElement = document.querySelector("#user-album-form");
memowallFormElement.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData();
  for (let i = 0; i < form.image.files.length; i++) {
    let file = form.image.files[i];
    console.log("file:", file);
    formData.append("image_" + i, file);
  }
  const res = await fetch("/album/upload", {
    method: "POST",
    body: formData
  });
  if (res.status === 200) {
    loadAlbum();
  }
});
