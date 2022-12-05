import "./style.css"
import { defineComponent as V, ref as L, reactive as x, onBeforeMount as O, openBlock as h, createElementBlock as p, createElementVNode as t, normalizeStyle as u, createTextVNode as T, toDisplayString as U, unref as X, createCommentVNode as k, pushScopeId as Z, popScopeId as q } from "vue";
const v = (l) => (Z("data-v-2db1d85e"), l = l(), q(), l), z = { class: "root" }, W = { class: "slider-captcha-content" }, G = { class: "slider-captcha-box" }, J = { class: "slider-captcha-img" }, K = /* @__PURE__ */ v(() => /* @__PURE__ */ t("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor",
  class: "bi bi-arrow-clockwise",
  viewBox: "0 0 20 20"
}, [
  /* @__PURE__ */ t("path", {
    "fill-rule": "evenodd",
    d: "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
  }),
  /* @__PURE__ */ t("path", { d: "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" })
], -1)), Q = [
  K
], Y = ["src"], ee = { key: 0 }, te = { style: { color: "#00c957" } }, se = { key: 1 }, oe = /* @__PURE__ */ v(() => /* @__PURE__ */ t("span", { style: { color: "#e33" } }, " \u5411\u53F3\u6ED1\u52A8\u6ED1\u5757\u8FDB\u884C\u6B63\u786E\u62FC\u5408 ", -1)), ie = { class: "slider-but-box" }, le = /* @__PURE__ */ v(() => /* @__PURE__ */ t("div", { class: "slider-but" }, [
  /* @__PURE__ */ t("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor",
    class: "bi bi-circle-fill",
    viewBox: "0 0 20 20"
  }, [
    /* @__PURE__ */ t("circle", {
      cx: "8",
      cy: "8",
      r: "8"
    })
  ])
], -1)), ne = [
  le
], re = /* @__PURE__ */ v(() => /* @__PURE__ */ t("div", { class: "slider-suc-but" }, [
  /* @__PURE__ */ t("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor",
    class: "bi bi-check-lg",
    viewBox: "0 0 20 20"
  }, [
    /* @__PURE__ */ t("path", { d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" })
  ])
], -1)), ce = [
  re
], ae = /* @__PURE__ */ v(() => /* @__PURE__ */ t("div", { class: "slider-err-but" }, [
  /* @__PURE__ */ t("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor",
    class: "bi bi-x-lg",
    viewBox: "0 0 20 20"
  }, [
    /* @__PURE__ */ t("path", { d: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" })
  ])
], -1)), de = [
  ae
], ue = /* @__PURE__ */ V({
  __name: "index",
  props: {
    backendImg: {
      type: String,
      default: "",
      required: !0
    },
    jigsawPosition: {
      type: Object,
      default: {}
    },
    isBackendCheck: {
      type: Boolean,
      default: !1
    },
    errHowTimesRefresh: {
      type: Number,
      default: 5
    },
    allowEroor: {
      type: Number,
      default: void 0
    }
  },
  emits: {
    verifyRefresh: (l) => (l(), !0),
    verifySuccess: null,
    verifyError: null,
    verifyChange: (l, d) => (d(), !0)
  },
  setup(l, { emit: d }) {
    const n = l, f = L(n.backendImg), m = n.allowEroor || 2, _ = 300, F = 140, e = x({
      left: 0,
      isPress: !1,
      state: 0
    }), a = x({
      left: 0,
      top: 0
    }), r = x({
      left: 0,
      top: 0
    });
    let C = 0, g = 0, w = L(0), P = null, y = 0;
    O(() => {
      b(
        n.jigsawPosition.left,
        n.jigsawPosition.top
      );
    });
    const b = (s, o) => {
      let i = 0, c = 0;
      s && o ? (i = s, c = o) : (i = S(42, _ - 42), c = S(2, F - 42)), a.left = i, a.top = c, r.top = c;
    }, M = (s) => {
      document.addEventListener("mousemove", B), document.addEventListener("mouseup", E), w.value = 0, P = setInterval(() => {
        g += 100;
      }, 100), C = s.clientX, e.isPress = !0;
    }, B = (s) => {
      const o = s.clientX - C;
      e.isPress && (e.left = o, o < 0 ? (e.left = 0, r.left = 0) : o >= 0 && o < _ - 38 ? (e.left = o, r.left = o) : (e.left = _ - 38, r.left = _ - 40));
    }, E = async () => {
      document.removeEventListener("mousemove", B), document.removeEventListener("mouseup", E), clearInterval(P), w.value = g / 1e3, g = 0, e.isPress = !1;
      let s = !1;
      if (n.isBackendCheck && (s = await A(), console.log(s)), (n.isBackendCheck && s || !n.isBackendCheck) && a.left - m < r.left && r.left < a.left + m)
        e.state = 1, d("verifySuccess");
      else {
        y += 1, e.state = 2, d("verifyError");
        let o = setTimeout(() => {
          e.left = 0, r.left = 0;
          let i = setTimeout(() => {
            e.state = 0, clearTimeout(o), clearTimeout(i), o = null, i = null, n.errHowTimesRefresh && n.errHowTimesRefresh === y + 1 && I();
          }, 400);
        }, 500);
      }
    }, I = async () => {
      y = 0, await d("verifyRefresh", (s) => {
        s ? (b(s.left, s.top), s.backendImg && (f.value = s.backendImg)) : b();
      });
    }, A = () => new Promise(async (s, o) => {
      const i = await N();
      d(
        "verifyChange",
        {
          left: r.left,
          top: r.top,
          backendImg: f.value,
          jigsawImg: i
        },
        (c) => {
          s && s(c);
        }
      );
    }), S = (s, o) => Math.floor(Math.random() * (s - o) + o), N = () => new Promise((s, o) => {
      const i = new Image();
      i.src = f.value, i.setAttribute("crossOrigin", "anonymous"), i.onload = function() {
        const c = document.createElement("canvas"), R = c.getContext("2d"), D = this, $ = 300, H = 140;
        c.width = 40, c.height = 40, R.drawImage(D, -a.left, -a.top, $, H), s(c.toDataURL("image/jpg", 1));
      }, i.onerror = function() {
        o("\u56FE\u7247\u83B7\u53D6\u5931\u8D25");
      };
    });
    return (s, o) => (h(), p("div", z, [
      t("div", W, [
        t("div", G, [
          t("div", J, [
            t("div", { class: "other-operation" }, [
              t("div", {
                class: "refresh-but",
                onClick: I
              }, Q)
            ]),
            t("img", {
              class: "backend-img",
              src: f.value
            }, null, 8, Y),
            t("div", {
              class: "slider-jigsaw",
              style: u({
                left: r.left + "px",
                top: r.top + "px",
                transition: e.isPress ? "0s" : "0.3s",
                backgroundImage: `url(${f.value})`,
                backgroundPosition: `-${a.left}px -${a.top}px`,
                opacity: e.isPress ? 1 : 0
              })
            }, null, 4),
            t("div", {
              class: "slider-defect",
              style: u({
                left: a.left + "px",
                top: a.top + "px",
                opacity: e.isPress ? 1 : 0
              })
            }, null, 4),
            t("div", {
              class: "slider-tip",
              style: u({
                height: e.state ? 20 + "px" : 0
              })
            }, [
              e.state === 1 ? (h(), p("span", ee, [
                T(" \u9A8C\u8BC1\u901A\u8FC7: \u4E00\u5171\u8017\u65F6 "),
                t("span", te, U(X(w)) + "s", 1)
              ])) : k("", !0),
              e.state === 2 ? (h(), p("span", se, [
                T(" \u9A8C\u8BC1\u5931\u8D25: "),
                oe
              ])) : k("", !0)
            ], 4)
          ]),
          t("div", ie, [
            e.state === 0 ? (h(), p("div", {
              key: 0,
              class: "slider-static-but",
              style: u({
                left: e.left + "px",
                transition: e.isPress ? "0s" : "0.3s"
              }),
              onMousedown: M
            }, ne, 36)) : e.state === 1 ? (h(), p("div", {
              key: 1,
              class: "slider-static-but2",
              style: u({
                left: e.left + "px",
                transition: e.isPress ? "0s" : "0.3s"
              })
            }, ce, 4)) : e.state === 2 ? (h(), p("div", {
              key: 2,
              class: "slider-static-but3",
              style: u({
                left: e.left + "px",
                transition: e.isPress ? "0s" : "0.3s"
              })
            }, de, 4)) : k("", !0),
            t("div", {
              class: "slider-road",
              style: u({ "pointer-events": e.isPress ? "all" : "none" })
            }, [
              t("div", {
                class: "slider-road-backend",
                style: u({
                  backgroundColor: e.isPress ? "#1E90FF" : "#999"
                })
              }, null, 4)
            ], 4)
          ])
        ])
      ])
    ]));
  }
});
const j = (l, d) => {
  const n = l.__vccOpts || l;
  for (const [f, m] of d)
    n[f] = m;
  return n;
}, ve = /* @__PURE__ */ j(ue, [["__scopeId", "data-v-2db1d85e"]]), fe = {};
function he(l, d) {
  return h(), p("div", null, "1234");
}
const me = /* @__PURE__ */ j(fe, [["render", he]]);
export {
  me as DragCaptcha,
  ve as SliderCaptcha
};
