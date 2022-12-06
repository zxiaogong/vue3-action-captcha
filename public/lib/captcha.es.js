import "./style.css"
import { defineComponent as Q, ref as k, reactive as T, onBeforeMount as Y, openBlock as h, createElementBlock as p, createElementVNode as t, normalizeStyle as u, createTextVNode as O, toDisplayString as Z, unref as ee, createCommentVNode as S, pushScopeId as te, popScopeId as se } from "vue";
const _ = (n) => (te("data-v-2dbd262d"), n = n(), se(), n), oe = { class: "root" }, le = { class: "slider-captcha-content" }, ie = { class: "slider-captcha-box" }, ae = { class: "slider-captcha-img" }, ne = /* @__PURE__ */ _(() => /* @__PURE__ */ t("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-arrow-clockwise",
  viewBox: "0 0 16 16"
}, [
  /* @__PURE__ */ t("path", {
    "fill-rule": "evenodd",
    d: "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
  }),
  /* @__PURE__ */ t("path", { d: "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" })
], -1)), re = [
  ne
], ce = ["src"], de = ["src"], ue = ["src"], fe = { key: 0 }, he = { style: { color: "#00c957" } }, pe = { key: 1 }, ve = /* @__PURE__ */ _(() => /* @__PURE__ */ t("span", { style: { color: "#e33" } }, " \u5411\u53F3\u6ED1\u52A8\u6ED1\u5757\u8FDB\u884C\u6B63\u786E\u62FC\u5408 ", -1)), me = { class: "slider-but-box" }, _e = /* @__PURE__ */ _(() => /* @__PURE__ */ t("div", { class: "slider-but-box-tip" }, "\u5411\u53F3\u6ED1\u52A8\u6ED1\u5757\u8FDB\u884C\u6B63\u786E\u62FC\u5408", -1)), ge = /* @__PURE__ */ _(() => /* @__PURE__ */ t("div", { class: "slider-but" }, [
  /* @__PURE__ */ t("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    class: "bi bi-forward-fill",
    viewBox: "0 0 16 16"
  }, [
    /* @__PURE__ */ t("path", { d: "m9.77 12.11 4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557z" })
  ])
], -1)), we = [
  ge
], be = /* @__PURE__ */ _(() => /* @__PURE__ */ t("div", { class: "slider-suc-but" }, [
  /* @__PURE__ */ t("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    class: "bi bi-check",
    viewBox: "0 0 16 16"
  }, [
    /* @__PURE__ */ t("path", { d: "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" })
  ])
], -1)), ye = [
  be
], ke = /* @__PURE__ */ _(() => /* @__PURE__ */ t("div", { class: "slider-err-but" }, [
  /* @__PURE__ */ t("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    class: "bi bi-x",
    viewBox: "0 0 16 16"
  }, [
    /* @__PURE__ */ t("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" })
  ])
], -1)), xe = [
  ke
], Ce = /* @__PURE__ */ Q({
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
    verifyRefresh: (n) => (n(), !0),
    verifySuccess: null,
    verifyError: null,
    verifyChange: null
  },
  setup(n, { emit: f }) {
    const a = n, v = k(a.backendImg), g = k(""), z = k(""), D = a.allowEroor || 2, w = 60, U = 60, b = 320, F = 160, e = T({
      left: 0,
      isPress: !1,
      state: 0
    }), c = T({
      left: 0,
      top: 0
    }), r = T({
      left: 0,
      top: 0
    });
    let L = 0, P = 0, B = k(0), M = null, I = 0;
    const x = k(!0);
    Y(() => {
      E(
        a.jigsawPosition.left,
        a.jigsawPosition.top
      ), N().then((s) => {
        g.value = s;
      }), N(!0).then((s) => {
        z.value = s;
      });
    });
    const E = (s, l) => {
      let d = 0, i = 0;
      s && l ? (d = s, i = l) : (d = H(w + 2, b - w - 2), i = H(2, F - U - 2)), c.left = d, c.top = i, r.top = i;
    }, X = (s) => {
      x.value = !1, document.addEventListener("mousemove", A), document.addEventListener("mouseup", j), B.value = 0, M = setInterval(() => {
        P += 100;
      }, 100), L = s.clientX, e.isPress = !0;
    }, A = (s) => {
      const l = s.clientX - L;
      e.isPress && (e.left = l, l < 0 ? (e.left = 0, r.left = 0) : l >= 0 && l < b - w + 2 ? (e.left = l, r.left = l) : (e.left = b - w + 2, r.left = b - w));
    }, j = async () => {
      document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", j), clearInterval(M), B.value = P / 1e3, P = 0;
      let s = !1;
      e.isPress = !1;
      const l = () => {
        I += 1, e.state = 2, f("verifyError");
        let d = setTimeout(() => {
          e.left = 0, r.left = 0;
          let i = setTimeout(() => {
            x.value = !0, e.state = 0, clearTimeout(d), clearTimeout(i), d = null, i = null, a.errHowTimesRefresh && a.errHowTimesRefresh === I + 1 && R();
          }, 400);
        }, 500);
      };
      c.left - D < r.left && r.left < c.left + D ? (a.isBackendCheck && (s = await $()), a.isBackendCheck && s || !a.isBackendCheck ? (e.state = 1, f("verifySuccess")) : l()) : l();
    }, R = async () => {
      I = 0, e.state !== 1 && await f("verifyRefresh", (s) => {
        s ? (E(s.left, s.top), s.backendImg && (v.value = s.backendImg)) : E();
      });
    }, $ = () => new Promise(async (s, l) => {
      f(
        "verifyChange",
        {
          left: r.left,
          top: r.top,
          backendImg: v.value,
          jigsawImg: g.value
        },
        (d) => {
          s(d);
        }
      );
    }), H = (s, l) => Math.floor(Math.random() * (s - l) + l), N = (s) => new Promise((l, d) => {
      const i = new Image();
      i.src = v.value, i.setAttribute("crossOrigin", "anonymous"), i.onload = function() {
        const C = document.createElement("canvas"), o = C.getContext("2d"), q = this;
        C.width = 60, C.height = 60, o.fillStyle = "#fff", o.shadowBlur = 20, o.fillRect(0, 0, 60, 60), o.beginPath(), s ? o.globalAlpha = 0.2 : (o.lineWidth = 2, o.strokeStyle = "#ffff00"), o.arc(26, 10, 6, 15, Math.PI / 5, 0), o.arc(50, 34, 6, 4, Math.PI / 1.4, 0), o.moveTo(6, 14), o.lineTo(46, 14), o.lineTo(46, 58), o.lineTo(6, 58), o.lineTo(6, 42), o.arcTo(16, 42, 17, 32, 7), o.arcTo(16, 32, 6, 26, 7), o.lineTo(6, 30), o.closePath(), o.stroke(), o.clip(), o.drawImage(
          q,
          -c.left,
          -c.top,
          b,
          F
        ), o.drawImage(i, -c.left, -c.top, 320, 160);
        const V = o.getImageData(0, 0, 320, 320), y = V.data;
        for (let m = 0; m < y.length; m += 4) {
          let J = y[m], G = y[m + 1], K = y[m + 2];
          J === 255 && G === 255 && K === 255 && (y[m + 3] = 0);
        }
        o.putImageData(V, 0, 0), l(C.toDataURL("image/jpg", 1));
      }, i.onerror = function() {
        console.error("\u56FE\u7247\u83B7\u53D6\u5931\u8D25"), d("");
      };
    });
    return (s, l) => (h(), p("div", oe, [
      t("div", le, [
        t("div", ie, [
          t("div", ae, [
            t("div", { class: "other-operation" }, [
              t("div", {
                class: "refresh-but",
                onClick: R
              }, re)
            ]),
            t("img", {
              class: "backend-img",
              src: v.value
            }, null, 8, ce),
            t("div", {
              class: "slider-jigsaw",
              style: u({
                left: r.left + "px",
                top: r.top + "px",
                transition: e.isPress ? "0s" : "0.3s",
                opacity: !e.isPress && x.value ? 0 : 1
              })
            }, [
              t("img", { src: g.value }, null, 8, de)
            ], 4),
            t("div", {
              class: "slider-defect",
              style: u({
                left: c.left + "px",
                top: c.top + "px",
                opacity: !e.isPress && x.value ? 0 : 1
              })
            }, [
              t("img", { src: z.value }, null, 8, ue)
            ], 4),
            t("div", {
              class: "slider-tip",
              style: u({
                height: e.state ? 20 + "px" : 0
              })
            }, [
              e.state === 1 ? (h(), p("span", fe, [
                O(" \u9A8C\u8BC1\u901A\u8FC7: \u4E00\u5171\u8017\u65F6 "),
                t("span", he, Z(ee(B)) + "s", 1)
              ])) : S("", !0),
              e.state === 2 ? (h(), p("span", pe, [
                O(" \u9A8C\u8BC1\u5931\u8D25: "),
                ve
              ])) : S("", !0)
            ], 4)
          ]),
          t("div", me, [
            _e,
            e.state === 0 ? (h(), p("div", {
              key: 0,
              class: "slider-static-but",
              style: u({
                left: e.left + "px",
                transition: e.isPress ? "0s" : "0.3s"
              }),
              onMousedown: X
            }, we, 36)) : e.state === 1 ? (h(), p("div", {
              key: 1,
              class: "slider-static-but2",
              style: u({
                left: e.left + "px",
                transition: e.isPress ? "0s" : "0.3s"
              })
            }, ye, 4)) : e.state === 2 ? (h(), p("div", {
              key: 2,
              class: "slider-static-but3",
              style: u({
                left: e.left + "px",
                transition: e.isPress ? "0s" : "0.3s"
              })
            }, xe, 4)) : S("", !0),
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
const W = (n, f) => {
  const a = n.__vccOpts || n;
  for (const [v, g] of f)
    a[v] = g;
  return a;
}, Ee = /* @__PURE__ */ W(Ce, [["__scopeId", "data-v-2dbd262d"]]), Pe = {};
function Be(n, f) {
  return h(), p("div", null, "1234");
}
const Te = /* @__PURE__ */ W(Pe, [["render", Be]]);
export {
  Te as DragCaptcha,
  Ee as SliderCaptcha
};
