import "./style.css"
import { defineComponent as ee, ref as B, reactive as j, onBeforeMount as te, openBlock as w, createElementBlock as b, createElementVNode as t, normalizeStyle as v, createTextVNode as G, toDisplayString as se, unref as ie, createCommentVNode as D, pushScopeId as oe, popScopeId as le } from "vue";
const y = (c) => (oe("data-v-fa702964"), c = c(), le(), c), ae = { class: "root" }, ne = { class: "slider-captcha-content" }, re = { class: "slider-captcha-box" }, ce = { class: "slider-captcha-img" }, de = /* @__PURE__ */ y(() => /* @__PURE__ */ t("svg", {
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
], -1)), ue = [
  de
], fe = ["src"], he = ["src"], ve = ["src"], pe = { key: 0 }, me = { style: { color: "#00c957" } }, ge = { key: 1 }, _e = /* @__PURE__ */ y(() => /* @__PURE__ */ t("span", { style: { color: "#e33" } }, " \u5411\u53F3\u6ED1\u52A8\u6ED1\u5757\u8FDB\u884C\u6B63\u786E\u62FC\u5408 ", -1)), we = { class: "slider-but-box" }, be = /* @__PURE__ */ y(() => /* @__PURE__ */ t("div", { class: "slider-but-box-tip" }, "\u5411\u53F3\u6ED1\u52A8\u6ED1\u5757\u8FDB\u884C\u6B63\u786E\u62FC\u5408", -1)), ye = /* @__PURE__ */ y(() => /* @__PURE__ */ t("div", { class: "slider-but" }, [
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
], -1)), ke = [
  ye
], xe = /* @__PURE__ */ y(() => /* @__PURE__ */ t("div", { class: "slider-suc-but" }, [
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
], -1)), Pe = [
  xe
], Ce = /* @__PURE__ */ y(() => /* @__PURE__ */ t("div", { class: "slider-err-but" }, [
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
], -1)), Be = [
  Ce
], Ie = /* @__PURE__ */ ee({
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
    verifyRefresh: (c) => (c(), !0),
    verifySuccess: null,
    verifyError: null,
    verifyChange: null
  },
  setup(c, { emit: g }) {
    const l = c, _ = B(l.backendImg), k = B(""), H = B(""), N = l.allowEroor || 2, x = 60, K = 60, P = 320, W = 160, s = j({
      left: 0,
      isPress: !1,
      state: 0
    }), d = j({
      left: 0,
      top: 0
    }), n = j({
      left: 0,
      top: 0
    });
    let V = 0, T = 0, S = B(0), X = null, z = 0;
    const R = B(!0);
    te(() => {
      F(
        l.jigsawPosition.left,
        l.jigsawPosition.top
      ), J().then((i) => {
        k.value = i;
      }), J(!0).then((i) => {
        H.value = i;
      });
    });
    const F = (i, o) => {
      let a = 0, r = 0;
      i && o ? (a = i, r = o) : (a = Y(x + 2, P - x - 2), r = Y(2, W - K - 2)), d.left = a, d.top = r, n.top = r;
    }, Q = (i) => {
      R.value = !1, document.addEventListener("mousemove", O), document.addEventListener("mouseup", q), S.value = 0, X = setInterval(() => {
        T += 100;
      }, 100), V = i.clientX, s.isPress = !0;
    }, O = (i) => {
      const o = i.clientX - V;
      s.isPress && (s.left = o, o < 0 ? (s.left = 0, n.left = 0) : o >= 0 && o < P - x + 2 ? (s.left = o, n.left = o) : (s.left = P - x + 2, n.left = P - x));
    }, q = async () => {
      document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", q), clearInterval(X), S.value = T / 1e3, T = 0;
      let i = !1;
      s.isPress = !1;
      const o = () => {
        z += 1, s.state = 2, g("verifyError");
        let a = setTimeout(() => {
          s.left = 0, n.left = 0;
          let r = setTimeout(() => {
            R.value = !0, s.state = 0, clearTimeout(a), clearTimeout(r), a = null, r = null, l.errHowTimesRefresh && l.errHowTimesRefresh === z + 1 && U();
          }, 400);
        }, 500);
      };
      d.left - N < n.left && n.left < d.left + N ? (l.isBackendCheck && (i = await Z()), l.isBackendCheck && i || !l.isBackendCheck ? (s.state = 1, g("verifySuccess")) : o()) : o();
    }, U = async () => {
      z = 0, s.state !== 1 && await g("verifyRefresh", (i) => {
        i ? (F(i.left, i.top), i.backendImg && (_.value = i.backendImg)) : F();
      });
    }, Z = () => new Promise(async (i, o) => {
      g(
        "verifyChange",
        {
          left: n.left,
          top: n.top,
          backendImg: _.value,
          jigsawImg: k.value
        },
        (a) => {
          i(a);
        }
      );
    }), Y = (i, o) => Math.floor(Math.random() * (i - o) + o), J = (i) => {
      const o = (a, r, p, u) => {
        var e = 1;
        I(a, r, p);
        function I(C, E, m) {
          var f = m - e, h = Math.sqrt(m * m - f * f), M = C - f, A = E - h, L = 2.3 * f, $ = 2 * h;
          e <= m && (u.clearRect(M, A, L, $), e += 1, I(C, E, m));
        }
      };
      return new Promise((a, r) => {
        const p = new Image();
        p.src = _.value, p.setAttribute("crossOrigin", "anonymous"), p.onload = function() {
          const u = document.createElement("canvas"), e = u.getContext("2d"), I = this;
          u.width = 60, u.height = 60, e.fillStyle = "#fff", e.shadowBlur = 20, e.fillRect(0, 0, 60, 60), i ? e.globalAlpha = 0.2 : (e.lineWidth = 2, e.strokeStyle = "#ffff00", e.beginPath(), e.lineWidth = 2, e.moveTo(6, 14), e.lineTo(6, 30), e.stroke()), e.beginPath(), e.arc(26, 10, 6, 15, Math.PI / 5, 0), e.arc(50, 34, 6, 4, Math.PI / 1.4, 0), e.moveTo(6, 14), e.lineTo(46, 14), e.lineTo(46, 58), e.lineTo(6, 58), e.lineTo(6, 42), e.lineTo(6, 40), i || e.stroke(), e.clip(), e.drawImage(
            I,
            -d.left,
            -d.top,
            P,
            W
          ), e.drawImage(p, -d.left, -d.top, 320, 160), i ? o(10, 36, 6, e) : (e.beginPath(), e.lineWidth = 1, e.fillStyle = "#fff", e.arc(10, 36, 6, 4, Math.PI / 1, 0), e.fill(), e.stroke());
          const C = e.getImageData(0, 0, 320, 320);
          if (window.devicePixelRatio) {
            var E = u.width, m = u.height;
            u.height = m * window.devicePixelRatio, u.width = E * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio);
          }
          const f = C.data;
          for (let h = 0; h < f.length; h += 4) {
            let M = f[h], A = f[h + 1], L = f[h + 2];
            M === 255 && A === 255 && L === 255 && (f[h + 3] = 0);
          }
          e.putImageData(C, 0, 0), a(u.toDataURL("image/jpg", 1));
        }, p.onerror = function() {
          console.error("\u56FE\u7247\u83B7\u53D6\u5931\u8D25"), r("");
        };
      });
    };
    return (i, o) => (w(), b("div", ae, [
      t("div", ne, [
        t("div", re, [
          t("div", ce, [
            t("div", { class: "other-operation" }, [
              t("div", {
                class: "refresh-but",
                onClick: U
              }, ue)
            ]),
            t("img", {
              class: "backend-img",
              src: _.value
            }, null, 8, fe),
            t("div", {
              class: "slider-jigsaw",
              style: v({
                left: n.left + "px",
                top: n.top + "px",
                transition: s.isPress ? "0s" : "0.3s",
                opacity: 1
              })
            }, [
              t("img", { src: k.value }, null, 8, he)
            ], 4),
            t("div", {
              class: "slider-defect",
              style: v({
                left: d.left + "px",
                top: d.top + "px",
                opacity: !s.isPress && R.value ? 0 : 1
              })
            }, [
              t("img", { src: H.value }, null, 8, ve)
            ], 4),
            t("div", {
              class: "slider-tip",
              style: v({
                height: s.state ? 20 + "px" : 0
              })
            }, [
              s.state === 1 ? (w(), b("span", pe, [
                G(" \u9A8C\u8BC1\u901A\u8FC7: \u4E00\u5171\u8017\u65F6 "),
                t("span", me, se(ie(S)) + "s", 1)
              ])) : D("", !0),
              s.state === 2 ? (w(), b("span", ge, [
                G(" \u9A8C\u8BC1\u5931\u8D25: "),
                _e
              ])) : D("", !0)
            ], 4)
          ]),
          t("div", we, [
            be,
            s.state === 0 ? (w(), b("div", {
              key: 0,
              class: "slider-static-but",
              style: v({
                left: s.left + "px",
                transition: s.isPress ? "0s" : "0.3s"
              }),
              onMousedown: Q
            }, ke, 36)) : s.state === 1 ? (w(), b("div", {
              key: 1,
              class: "slider-static-but2",
              style: v({
                left: s.left + "px",
                transition: s.isPress ? "0s" : "0.3s"
              })
            }, Pe, 4)) : s.state === 2 ? (w(), b("div", {
              key: 2,
              class: "slider-static-but3",
              style: v({
                left: s.left + "px",
                transition: s.isPress ? "0s" : "0.3s"
              })
            }, Be, 4)) : D("", !0),
            t("div", {
              class: "slider-road",
              style: v({ "pointer-events": s.isPress ? "all" : "none" })
            }, [
              t("div", {
                class: "slider-road-backend",
                style: v({
                  backgroundColor: s.isPress ? "#1E90FF" : "#999"
                })
              }, null, 4)
            ], 4)
          ])
        ])
      ])
    ]));
  }
});
const Ee = (c, g) => {
  const l = c.__vccOpts || c;
  for (const [_, k] of g)
    l[_] = k;
  return l;
}, Se = /* @__PURE__ */ Ee(Ie, [["__scopeId", "data-v-fa702964"]]);
export {
  Se as SliderCaptcha
};
