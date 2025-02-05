/*
 * Template Name: PRO Card - Material Resume / CV / vCard Template
 * Author: lmpixels
 * Author URL: http://themeforest.net/user/lmpixels
 * Version: 1.1
 */

var PageTransitions = (function (a, e) {
  "use strict";
  var t = "home",
    p = a(".subpages"),
    o = !1,
    r = !0,
    g = !1,
    n = a(window),
    s = {
      WebkitAnimation: "webkitAnimationEnd",
      OAnimation: "oAnimationEnd",
      msAnimation: "MSAnimationEnd",
      animation: "animationend",
    }[Modernizr.prefixed("animation")],
    i = Modernizr.cssanimations;
  function m(e) {
    if (!e) return !1;
    var t = a(e);
    (t = t[0]),
      (t = a(t.parentNode)) &&
        (a("ul.site-main-menu li").removeClass("active"), t.addClass("active"));
  }
  function c() {
    var e = a("#page-ajax-loaded");
    function t() {
      e.removeClass("rotateOutDownRight closed"),
        e.show(),
        a("body").addClass("ajax-page-visible");
    }
    var p = a(".ajax-page-load").each(function () {
      if (
        ((p = a(this).attr("href")),
        location.hash ==
          location.hash.split("/")[0] + "/" + p.substr(0, p.length - 5))
      ) {
        var o = a(this).attr("href");
        return t(), e.load(o), !1;
      }
    });
    a(document)
      .on("click", ".site-main-menu, #ajax-page-close-button", function (t) {
        t.preventDefault(),
          a("#page-ajax-loaded").addClass("rotateOutDownRight closed"),
          a("body").removeClass("ajax-page-visible"),
          setTimeout(function () {
            a("#page-ajax-loaded.closed").html(""), e.hide();
          }, 500),
          (location.hash = location.hash.split("/")[0]);
      })
      .on("click", ".ajax-page-load", function () {
        var e =
          location.hash.split("/")[0] +
          "/" +
          a(this)
            .attr("href")
            .substr(0, a(this).attr("href").length - 5);
        return (location.hash = e), t(), !1;
      });
  }
  function l(e, t) {
    if (!e.attr("data-animation")) {
      var m = parseInt(Math.floor(67 * Math.random()) + 1);
      e.data("animation", m);
    }
    var c,
      l,
      h,
      u = e.data("animation").toString();
    if (-1 != u.indexOf("-")) {
      var b = u.split("-");
      h = parseInt(b[Math.floor(Math.random() * b.length)]);
    } else h = parseInt(u);
    if (h > 67)
      return (
        alert(
          "Transition.js : Invalid 'data-animation' attribute configuration. Animation number should not be greater than 67"
        ),
        !1
      );
    switch (h) {
      case 1:
        (c = "pt-page-moveFromRight"), (l = "pt-page-moveToLeft");
        break;
      case 2:
        (c = "pt-page-moveFromLeft"), (l = "pt-page-moveToRight");
        break;
      case 3:
        (c = "pt-page-moveFromBottom"), (l = "pt-page-moveToTop");
        break;
      case 4:
        (c = "pt-page-moveFromTop"), (l = "pt-page-moveToBottom");
        break;
      case 5:
        (c = "pt-page-moveFromRight pt-page-ontop"), (l = "pt-page-fade");
        break;
      case 6:
        (c = "pt-page-moveFromLeft pt-page-ontop"), (l = "pt-page-fade");
        break;
      case 7:
        (c = "pt-page-moveFromBottom pt-page-ontop"), (l = "pt-page-fade");
        break;
      case 8:
        (c = "pt-page-moveFromTop pt-page-ontop"), (l = "pt-page-fade");
        break;
      case 9:
        (c = "pt-page-moveFromRightFade"), (l = "pt-page-moveToLeftFade");
        break;
      case 10:
        (c = "pt-page-moveFromLeftFade"), (l = "pt-page-moveToRightFade");
        break;
      case 11:
        (c = "pt-page-moveFromBottomFade"), (l = "pt-page-moveToTopFade");
        break;
      case 12:
        (c = "pt-page-moveFromTopFade"), (l = "pt-page-moveToBottomFade");
        break;
      case 13:
        (c = "pt-page-moveFromRight"),
          (l = "pt-page-moveToLeftEasing pt-page-ontop");
        break;
      case 14:
        (c = "pt-page-moveFromLeft"),
          (l = "pt-page-moveToRightEasing pt-page-ontop");
        break;
      case 15:
        (c = "pt-page-moveFromBottom"),
          (l = "pt-page-moveToTopEasing pt-page-ontop");
        break;
      case 16:
        (c = "pt-page-moveFromTop"),
          (l = "pt-page-moveToBottomEasing pt-page-ontop");
        break;
      case 17:
        (c = "pt-page-moveFromRight pt-page-ontop"), (l = "pt-page-scaleDown");
        break;
      case 18:
        (c = "pt-page-moveFromLeft pt-page-ontop"), (l = "pt-page-scaleDown");
        break;
      case 19:
        (c = "pt-page-moveFromBottom pt-page-ontop"), (l = "pt-page-scaleDown");
        break;
      case 20:
        (c = "pt-page-moveFromTop pt-page-ontop"), (l = "pt-page-scaleDown");
        break;
      case 21:
        (c = "pt-page-scaleUpDown pt-page-delay300"), (l = "pt-page-scaleDown");
        break;
      case 22:
        (c = "pt-page-scaleUp pt-page-delay300"), (l = "pt-page-scaleDownUp");
        break;
      case 23:
        (c = "pt-page-scaleUp"), (l = "pt-page-moveToLeft pt-page-ontop");
        break;
      case 24:
        (c = "pt-page-scaleUp"), (l = "pt-page-moveToRight pt-page-ontop");
        break;
      case 25:
        (c = "pt-page-scaleUp"), (l = "pt-page-moveToTop pt-page-ontop");
        break;
      case 26:
        (c = "pt-page-scaleUp"), (l = "pt-page-moveToBottom pt-page-ontop");
        break;
      case 27:
        (c = "pt-page-scaleUpCenter pt-page-delay400"),
          (l = "pt-page-scaleDownCenter");
        break;
      case 28:
        (c = "pt-page-moveFromRight pt-page-delay200 pt-page-ontop"),
          (l = "pt-page-rotateRightSideFirst");
        break;
      case 29:
        (c = "pt-page-moveFromLeft pt-page-delay200 pt-page-ontop"),
          (l = "pt-page-rotateLeftSideFirst");
        break;
      case 30:
        (c = "pt-page-moveFromTop pt-page-delay200 pt-page-ontop"),
          (l = "pt-page-rotateTopSideFirst");
        break;
      case 31:
        (c = "pt-page-moveFromBottom pt-page-delay200 pt-page-ontop"),
          (l = "pt-page-rotateBottomSideFirst");
        break;
      case 32:
        (c = "pt-page-flipInLeft pt-page-delay500"),
          (l = "pt-page-flipOutRight");
        break;
      case 33:
        (c = "pt-page-flipInRight pt-page-delay500"),
          (l = "pt-page-flipOutLeft");
        break;
      case 34:
        (c = "pt-page-flipInBottom pt-page-delay500"),
          (l = "pt-page-flipOutTop");
        break;
      case 35:
        (c = "pt-page-flipInTop pt-page-delay500"),
          (l = "pt-page-flipOutBottom");
        break;
      case 36:
        (c = "pt-page-scaleUp"), (l = "pt-page-rotateFall pt-page-ontop");
        break;
      case 37:
        (c = "pt-page-rotateInNewspaper pt-page-delay500"),
          (l = "pt-page-rotateOutNewspaper");
        break;
      case 38:
        (c = "pt-page-moveFromRight"), (l = "pt-page-rotatePushLeft");
        break;
      case 39:
        (c = "pt-page-moveFromLeft"), (l = "pt-page-rotatePushRight");
        break;
      case 40:
        (c = "pt-page-moveFromBottom"), (l = "pt-page-rotatePushTop");
        break;
      case 41:
        (c = "pt-page-moveFromTop"), (l = "pt-page-rotatePushBottom");
        break;
      case 42:
        (c = "pt-page-rotatePullRight pt-page-delay180"),
          (l = "pt-page-rotatePushLeft");
        break;
      case 43:
        (c = "pt-page-rotatePullLeft pt-page-delay180"),
          (l = "pt-page-rotatePushRight");
        break;
      case 44:
        (c = "pt-page-rotatePullBottom pt-page-delay180"),
          (l = "pt-page-rotatePushTop");
        break;
      case 45:
        (c = "pt-page-rotatePullTop pt-page-delay180"),
          (l = "pt-page-rotatePushBottom");
        break;
      case 46:
        (c = "pt-page-moveFromRightFade"), (l = "pt-page-rotateFoldLeft");
        break;
      case 47:
        (c = "pt-page-moveFromLeftFade"), (l = "pt-page-rotateFoldRight");
        break;
      case 48:
        (c = "pt-page-moveFromBottomFade"), (l = "pt-page-rotateFoldTop");
        break;
      case 49:
        (c = "pt-page-moveFromTopFade"), (l = "pt-page-rotateFoldBottom");
        break;
      case 50:
        (c = "pt-page-rotateUnfoldLeft"), (l = "pt-page-moveToRightFade");
        break;
      case 51:
        (c = "pt-page-rotateUnfoldRight"), (l = "pt-page-moveToLeftFade");
        break;
      case 52:
        (c = "pt-page-rotateUnfoldTop"), (l = "pt-page-moveToBottomFade");
        break;
      case 53:
        (c = "pt-page-rotateUnfoldBottom"), (l = "pt-page-moveToTopFade");
        break;
      case 54:
        (c = "pt-page-rotateRoomLeftIn"),
          (l = "pt-page-rotateRoomLeftOut pt-page-ontop");
        break;
      case 55:
        (c = "pt-page-rotateRoomRightIn"),
          (l = "pt-page-rotateRoomRightOut pt-page-ontop");
        break;
      case 56:
        (c = "pt-page-rotateRoomTopIn"),
          (l = "pt-page-rotateRoomTopOut pt-page-ontop");
        break;
      case 57:
        (c = "pt-page-rotateRoomBottomIn"),
          (l = "pt-page-rotateRoomBottomOut pt-page-ontop");
        break;
      case 58:
        (c = "pt-page-rotateCubeLeftIn"),
          (l = "pt-page-rotateCubeLeftOut pt-page-ontop");
        break;
      case 59:
        (c = "pt-page-rotateCubeRightIn"),
          (l = "pt-page-rotateCubeRightOut pt-page-ontop");
        break;
      case 60:
        (c = "pt-page-rotateCubeTopIn"),
          (l = "pt-page-rotateCubeTopOut pt-page-ontop");
        break;
      case 61:
        (c = "pt-page-rotateCubeBottomIn"),
          (l = "pt-page-rotateCubeBottomOut pt-page-ontop");
        break;
      case 62:
        (c = "pt-page-rotateCarouselLeftIn"),
          (l = "pt-page-rotateCarouselLeftOut pt-page-ontop");
        break;
      case 63:
        (c = "pt-page-rotateCarouselRightIn"),
          (l = "pt-page-rotateCarouselRightOut pt-page-ontop");
        break;
      case 64:
        (c = "pt-page-rotateCarouselTopIn"),
          (l = "pt-page-rotateCarouselTopOut pt-page-ontop");
        break;
      case 65:
        (c = "pt-page-rotateCarouselBottomIn"),
          (l = "pt-page-rotateCarouselBottomOut pt-page-ontop");
        break;
      case 66:
        (c = "pt-page-rotateSidesIn pt-page-delay200"),
          (l = "pt-page-rotateSidesOut");
        break;
      case 67:
        (c = "pt-page-rotateSlideIn"), (l = "pt-page-rotateSlideOut");
    }
    var f,
      v = p,
      k = v.data("current");
    t = e.attr("href").split("#")[1];
    f = k;
    var F = a('section[data-id="' + k + '"]');
    if (f != (k = t)) {
      (o = !0), v.data("current", k);
      var T = a("section[data-id=" + k + "]").addClass("pt-page-current");
      n.scrollTop(0);
      var R = n.height();
      a(".subpages").height(R + 50),
        F.addClass(l).on(s, function () {
          F.off(s), (r = !0), g && (d(v, T, F), (r = !1));
        }),
        T.addClass(c).on(s, function () {
          T.off(s), (g = !0), r && (d(v, T, F), (g = !1), (o = !1));
        });
    } else o = !1;
    i || d(F, T);
  }
  function d(e, t, p) {
    var o,
      r,
      g = t.height();
    a(".subpages").height(g + 50),
      (o = t),
      (r = p).attr("class", r.data("originalClassList")),
      o.attr("class", o.data("originalClassList") + " pt-page-current");
  }
  return {
    init: function (e) {
      a(".pt-page").each(function () {
        var e = a(this);
        e.data("originalClassList", e.attr("class"));
      }),
        p.each(function () {
          "" === location.hash &&
            a("section[data-id=" + g + "]").addClass("pt-page-current");
        }),
        a(".pt-trigger").on("click", function (e) {
          if ((e.preventDefault(), o)) return !1;
          var t = a(this);
          m(t), l(t), (location.hash = a(this).attr("href"));
        }),
        (window.onhashchange = function (e) {
          if (location.hash) {
            if (o) return !1;
            var t = a(r + ' a[href*="' + location.hash.split("/")[0] + '"]');
            m(t), l(t), c();
          }
        });
      var r = e.menu,
        g = "" === location.hash ? (location.hash = t) : location.hash;
      location.hash = g;
      var n = a(r + ' a[href*="' + location.hash.split("/")[0] + '"]');
      m(n),
        l(n),
        a("body").append(
          '<div id="page-ajax-loaded" class="page-ajax-loaded animated rotateInDownRight"></div>'
        ),
        c();
    },
  };
})(jQuery);
