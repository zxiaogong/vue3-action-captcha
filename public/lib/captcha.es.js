import { defineComponent as G, ref as I, reactive as j, onBeforeMount as te, openBlock as _, createElementBlock as b, createElementVNode as t, normalizeStyle as v, createTextVNode as N, toDisplayString as se, unref as ie, createCommentVNode as D, pushScopeId as oe, popScopeId as le, createVNode as ae } from "vue";
const y = (c) => (oe("data-v-fa702964"), c = c(), le(), c), ne = { class: "root" }, re = { class: "slider-captcha-content" }, ce = { class: "slider-captcha-box" }, de = { class: "slider-captcha-img" }, ue = /* @__PURE__ */ y(() => /* @__PURE__ */ t("svg", {
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
], -1)), fe = [
  ue
], he = ["src"], ve = ["src"], pe = ["src"], ge = { key: 0 }, me = { style: { color: "#00c957" } }, we = { key: 1 }, _e = /* @__PURE__ */ y(() => /* @__PURE__ */ t("span", { style: { color: "#e33" } }, " \u5411\u53F3\u6ED1\u52A8\u6ED1\u5757\u8FDB\u884C\u6B63\u786E\u62FC\u5408 ", -1)), be = { class: "slider-but-box" }, ye = /* @__PURE__ */ y(() => /* @__PURE__ */ t("div", { class: "slider-but-box-tip" }, "\u5411\u53F3\u6ED1\u52A8\u6ED1\u5757\u8FDB\u884C\u6B63\u786E\u62FC\u5408", -1)), xe = /* @__PURE__ */ y(() => /* @__PURE__ */ t("div", { class: "slider-but" }, [
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
  xe
], Pe = /* @__PURE__ */ y(() => /* @__PURE__ */ t("div", { class: "slider-suc-but" }, [
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
], -1)), Ce = [
  Pe
], Ie = /* @__PURE__ */ y(() => /* @__PURE__ */ t("div", { class: "slider-err-but" }, [
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
  Ie
], Ee = /* @__PURE__ */ G({
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
  setup(c, { emit: m }) {
    const l = c, w = I(l.backendImg), x = I(""), H = I(""), V = l.allowEroor || 2, k = 60, K = 60, P = 320, W = 160, s = j({
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
    let X = 0, S = 0, T = I(0), q = null, z = 0;
    const R = I(!0);
    te(() => {
      F(
        l.jigsawPosition.left,
        l.jigsawPosition.top
      ), J().then((i) => {
        x.value = i;
      }), J(!0).then((i) => {
        H.value = i;
      });
    });
    const F = (i, o) => {
      let a = 0, r = 0;
      i && o ? (a = i, r = o) : (a = $(k + 2, P - k - 2), r = $(2, W - K - 2)), d.left = a, d.top = r, n.top = r;
    }, Q = (i) => {
      R.value = !1, document.addEventListener("mousemove", O), document.addEventListener("mouseup", U), T.value = 0, q = setInterval(() => {
        S += 100;
      }, 100), X = i.clientX, s.isPress = !0;
    }, O = (i) => {
      const o = i.clientX - X;
      s.isPress && (s.left = o, o < 0 ? (s.left = 0, n.left = 0) : o >= 0 && o < P - k + 2 ? (s.left = o, n.left = o) : (s.left = P - k + 2, n.left = P - k));
    }, U = async () => {
      document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", U), clearInterval(q), T.value = S / 1e3, S = 0;
      let i = !1;
      s.isPress = !1;
      const o = () => {
        z += 1, s.state = 2, m("verifyError");
        let a = setTimeout(() => {
          s.left = 0, n.left = 0;
          let r = setTimeout(() => {
            R.value = !0, s.state = 0, clearTimeout(a), clearTimeout(r), a = null, r = null, l.errHowTimesRefresh && l.errHowTimesRefresh === z + 1 && Y();
          }, 400);
        }, 500);
      };
      d.left - V < n.left && n.left < d.left + V ? (l.isBackendCheck && (i = await Z()), l.isBackendCheck && i || !l.isBackendCheck ? (s.state = 1, m("verifySuccess")) : o()) : o();
    }, Y = async () => {
      z = 0, s.state !== 1 && await m("verifyRefresh", (i) => {
        i ? (F(i.left, i.top), i.backendImg && (w.value = i.backendImg)) : F();
      });
    }, Z = () => new Promise(async (i, o) => {
      m(
        "verifyChange",
        {
          left: n.left,
          top: n.top,
          backendImg: w.value,
          jigsawImg: x.value
        },
        (a) => {
          i(a);
        }
      );
    }), $ = (i, o) => Math.floor(Math.random() * (i - o) + o), J = (i) => {
      const o = (a, r, p, u) => {
        var e = 1;
        B(a, r, p);
        function B(C, E, g) {
          var f = g - e, h = Math.sqrt(g * g - f * f), M = C - f, A = E - h, L = 2.3 * f, ee = 2 * h;
          e <= g && (u.clearRect(M, A, L, ee), e += 1, B(C, E, g));
        }
      };
      return new Promise((a, r) => {
        const p = new Image();
        p.src = w.value, p.setAttribute("crossOrigin", "anonymous"), p.onload = function() {
          const u = document.createElement("canvas"), e = u.getContext("2d"), B = this;
          u.width = 60, u.height = 60, e.fillStyle = "#fff", e.shadowBlur = 20, e.fillRect(0, 0, 60, 60), i ? e.globalAlpha = 0.2 : (e.lineWidth = 2, e.strokeStyle = "#ffff00", e.beginPath(), e.lineWidth = 2, e.moveTo(6, 14), e.lineTo(6, 30), e.stroke()), e.beginPath(), e.arc(26, 10, 6, 15, Math.PI / 5, 0), e.arc(50, 34, 6, 4, Math.PI / 1.4, 0), e.moveTo(6, 14), e.lineTo(46, 14), e.lineTo(46, 58), e.lineTo(6, 58), e.lineTo(6, 42), e.lineTo(6, 40), i || e.stroke(), e.clip(), e.drawImage(
            B,
            -d.left,
            -d.top,
            P,
            W
          ), e.drawImage(p, -d.left, -d.top, 320, 160), i ? o(10, 36, 6, e) : (e.beginPath(), e.lineWidth = 1, e.fillStyle = "#fff", e.arc(10, 36, 6, 4, Math.PI / 1, 0), e.fill(), e.stroke());
          const C = e.getImageData(0, 0, 320, 320);
          if (window.devicePixelRatio) {
            var E = u.width, g = u.height;
            u.height = g * window.devicePixelRatio, u.width = E * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio);
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
    return (i, o) => (_(), b("div", ne, [
      t("div", re, [
        t("div", ce, [
          t("div", de, [
            t("div", { class: "other-operation" }, [
              t("div", {
                class: "refresh-but",
                onClick: Y
              }, fe)
            ]),
            t("img", {
              class: "backend-img",
              src: w.value
            }, null, 8, he),
            t("div", {
              class: "slider-jigsaw",
              style: v({
                left: n.left + "px",
                top: n.top + "px",
                transition: s.isPress ? "0s" : "0.3s",
                opacity: 1
              })
            }, [
              t("img", { src: x.value }, null, 8, ve)
            ], 4),
            t("div", {
              class: "slider-defect",
              style: v({
                left: d.left + "px",
                top: d.top + "px",
                opacity: !s.isPress && R.value ? 0 : 1
              })
            }, [
              t("img", { src: H.value }, null, 8, pe)
            ], 4),
            t("div", {
              class: "slider-tip",
              style: v({
                height: s.state ? 20 + "px" : 0
              })
            }, [
              s.state === 1 ? (_(), b("span", ge, [
                N(" \u9A8C\u8BC1\u901A\u8FC7: \u4E00\u5171\u8017\u65F6 "),
                t("span", me, se(ie(T)) + "s", 1)
              ])) : D("", !0),
              s.state === 2 ? (_(), b("span", we, [
                N(" \u9A8C\u8BC1\u5931\u8D25: "),
                _e
              ])) : D("", !0)
            ], 4)
          ]),
          t("div", be, [
            ye,
            s.state === 0 ? (_(), b("div", {
              key: 0,
              class: "slider-static-but",
              style: v({
                left: s.left + "px",
                transition: s.isPress ? "0s" : "0.3s"
              }),
              onMousedown: Q
            }, ke, 36)) : s.state === 1 ? (_(), b("div", {
              key: 1,
              class: "slider-static-but2",
              style: v({
                left: s.left + "px",
                transition: s.isPress ? "0s" : "0.3s"
              })
            }, Ce, 4)) : s.state === 2 ? (_(), b("div", {
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
const Se = (c, m) => {
  const l = c.__vccOpts || c;
  for (const [w, x] of m)
    l[w] = x;
  return l;
}, ze = /* @__PURE__ */ Se(Ee, [["__scopeId", "data-v-fa702964"]]);
const Re = G({
  props: {
    backendImg: {
      type: String,
      default: "",
      required: !0
    },
    jigsawPosition: {
      type: Number,
      default: void 0
    }
  },
  setup() {
    return () => ae("div", null, [N("123")]);
  }
});
export {
  Re as DragCaptcha,
  ze as SliderCaptcha
};
