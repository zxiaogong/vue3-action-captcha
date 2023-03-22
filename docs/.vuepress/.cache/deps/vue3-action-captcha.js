import {
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  onBeforeMount,
  onMounted,
  openBlock,
  popScopeId,
  pushScopeId,
  reactive,
  ref,
  unref,
  vShow,
  watch,
  withDirectives
} from "./chunk-AWA6B2ZS.js";
import {
  normalizeStyle,
  toDisplayString
} from "./chunk-JXWQMH7G.js";

// node_modules/vue3-action-captcha/dist/lib/captcha.es.js
var Le = { class: "time-tips-root" };
var Me = { style: { color: "#333" } };
var Re = { style: { color: "#00c957" } };
var Fe = { style: { color: "#333" } };
var Xe = { style: { color: "#e33" } };
var Ne = defineComponent({
  __name: "index",
  props: {
    state: {
      default: 0,
      type: Number
    },
    errTip: {
      default: void 0,
      type: String
    }
  },
  setup(e, { expose: s }) {
    const t = e, i = ref(0);
    let f = null, p = 0;
    return s({
      startTime: () => {
        p = 0, f = setInterval(() => {
          p += 100;
        }, 100);
      },
      showTip: () => {
        setTimeout(() => {
          p = 0, i.value = 0;
        }, 3e3);
      },
      stopTime: () => (i.value = p / 1e3, f && clearInterval(f), p)
    }), (h, A) => (openBlock(), createElementBlock("div", Le, [
      createBaseVNode("div", {
        class: "time-tips-root-content",
        style: normalizeStyle({
          height: t.state ? "20px" : 0
        })
      }, [
        withDirectives(createBaseVNode("span", Me, [
          createTextVNode(" 验证通过: 一共耗时 "),
          createBaseVNode("span", Re, toDisplayString(i.value) + "s", 1)
        ], 512), [
          [vShow, t.state === 1]
        ]),
        withDirectives(createBaseVNode("span", Fe, [
          createTextVNode(" 验证失败:  "),
          createBaseVNode("span", Xe, toDisplayString(t.errTip || "请重新验证"), 1)
        ], 512), [
          [vShow, t.state === 2]
        ])
      ], 4)
    ]));
  }
});
var me = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [i, f] of s)
    t[i] = f;
  return t;
};
var be = me(Ne, [["__scopeId", "data-v-6d612e2f"]]);
var Z = (e) => (pushScopeId("data-v-1ec7cd44"), e = e(), popScopeId(), e);
var Ye = { class: "slider-captcha-root" };
var De = { class: "slider-captcha-content" };
var Ue = { class: "slider-captcha-box" };
var He = { class: "slider-captcha-img" };
var Ve = Z(() => createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-arrow-clockwise",
  viewBox: "0 0 16 16"
}, [
  createBaseVNode("path", {
    "fill-rule": "evenodd",
    d: "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
  }),
  createBaseVNode("path", { d: "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" })
], -1));
var We = [
  Ve
];
var Ge = ["src"];
var qe = ["src"];
var Ke = ["src"];
var Je = { class: "slider-tip" };
var Qe = { class: "slider-but-box" };
var Ze = Z(() => createBaseVNode("div", { class: "slider-but" }, [
  createBaseVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor",
    class: "bi bi-forward-fill",
    viewBox: "0 -1 16 18"
  }, [
    createBaseVNode("path", { d: "m9.77 12.11 4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557z" })
  ])
], -1));
var et = [
  Ze
];
var tt = Z(() => createBaseVNode("div", { class: "slider-suc-but" }, [
  createBaseVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor",
    class: "bi bi-check",
    viewBox: "-1 -1 18 18"
  }, [
    createBaseVNode("path", { d: "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" })
  ])
], -1));
var st = [
  tt
];
var rt = Z(() => createBaseVNode("div", { class: "slider-err-but" }, [
  createBaseVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor",
    class: "bi bi-x",
    viewBox: "-1 -1 18 18"
  }, [
    createBaseVNode("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" })
  ])
], -1));
var ot = [
  rt
];
var nt = {
  name: "Slider-captcha"
};
var it = defineComponent({
  ...nt,
  props: {
    backendImg: {
      type: String,
      default: "",
      required: true
    },
    jigsawPosition: {
      type: Object,
      default: {}
    },
    /**是否需要后端校验 */
    isBackendCheck: {
      type: Boolean,
      default: false
    },
    /**失败几次刷新 */
    errHowTimesRefresh: {
      type: Number,
      default: 1
    },
    allowEroor: {
      type: Number,
      default: void 0
    }
  },
  emits: {
    /**刷新 */
    verifyRefresh: null,
    /**验证成功 */
    verifySuccess: null,
    /**验证失败 */
    verifyError: null,
    /**后端校验调用 */
    verifyChange: null
  },
  setup(e, { emit: s }) {
    const t = e, i = ref(null), f = ref(""), p = ref(""), m = t.allowEroor || 2, w = 60, _ = 60, h = 320, A = 160, a = reactive({
      left: 0,
      isPress: false,
      state: 0,
      stateColor: ""
    }), x = reactive({
      left: 0,
      top: 0
    }), T = reactive({
      left: 0,
      top: 0
    }), $ = computed(() => {
      switch (a.state) {
        case 1:
          return "#00c957";
        case 3:
          return "#1E90FF";
        default:
          return "#999999";
      }
    });
    let F = 0, X = 0, N = null, I = 0;
    const z = ref(true);
    onBeforeMount(() => {
      Y(
        t.jigsawPosition.left,
        t.jigsawPosition.top
      ), y().then((o) => {
        f.value = o;
      }), y(true).then((o) => {
        p.value = o;
      });
    }), watch(
      () => t.jigsawPosition,
      (o) => {
        Y(
          o.left,
          o.top
        );
      }
    );
    const Y = (o, r) => {
      let l = 0, b = 0;
      o && r ? (l = o, b = r) : (l = u(w + 2, h - w - 2), b = u(2, A - _ - 2)), x.left = l, x.top = b, T.top = b;
    }, G = (o) => {
      a.state = 3, z.value = false, document.addEventListener("mousemove", D), document.addEventListener("mouseup", U), i.value.startTime(), F = o.clientX, a.isPress = true;
    }, D = (o) => {
      const r = o.clientX - F;
      if (a.isPress) {
        let l = 0;
        r < 80 ? l = Math.trunc(r / 8) : r < 160 ? l = Math.trunc(r / 10) : r < 240 ? l = Math.trunc(r / 12) : r < 300 ? l = Math.trunc(r / 14) : l = Math.trunc(r / 16), r < 0 ? (a.left = 0, T.left = 0) : r >= 0 && r < h - 40 ? (a.left = r + 2.5, T.left = r - l) : (a.left = h - w + 21, T.left = h - w + 2);
      }
    }, U = async () => {
      document.removeEventListener("mousemove", D), document.removeEventListener("mouseup", U), clearInterval(N), X = i.value.stopTime();
      let o = false;
      a.isPress = false;
      const r = () => {
        I += 1, a.state = 2, s("verifyError");
        let l = setTimeout(() => {
          a.left = 0, T.left = 0;
          let b = setTimeout(() => {
            z.value = true, a.state = 0, clearTimeout(l), clearTimeout(b), l = null, b = null, t.errHowTimesRefresh <= I && H();
          }, 400);
        }, 500);
      };
      x.left - m < T.left && T.left < x.left + m ? (t.isBackendCheck && (o = await g()), t.isBackendCheck && o || !t.isBackendCheck ? (i.value.showTip(), a.state = 1, s("verifySuccess")) : r()) : r();
    }, H = async () => {
      I = 0, a.state !== 1 && (await s("verifyRefresh"), Y(t.jigsawPosition.left, t.jigsawPosition.top));
    }, g = () => new Promise(async (o, r) => {
      s(
        "verifyChange",
        {
          left: T.left,
          top: T.top,
          backendImg: t.backendImg,
          jigsawImg: f.value,
          processTime: X
        },
        (l) => {
          o(l);
        }
      );
    }), u = (o, r) => Math.floor(Math.random() * (o - r) + r), y = (o) => {
      const r = (l, b, j, v) => {
        var n = 1;
        B(l, b, j);
        function B(E, q, C) {
          var P = C - n, k = Math.sqrt(C * C - P * P), ee = E - P, te = q - k, se = 2.3 * P, ze = 2 * k;
          n <= C && (v.clearRect(ee, te, se, ze), n += 1, B(E, q, C));
        }
      };
      return new Promise((l, b) => {
        const j = new Image();
        j.src = t.backendImg, j.setAttribute("crossOrigin", "anonymous"), j.onload = function() {
          const v = document.createElement("canvas"), n = v.getContext("2d"), B = this;
          v.width = 60, v.height = 60, n.fillStyle = "#fff", n.shadowBlur = 20, n.fillRect(0, 0, 60, 60), o ? n.globalAlpha = 0.16 : (n.lineWidth = 2, n.strokeStyle = "#ffff00", n.beginPath(), n.lineWidth = 2, n.moveTo(6, 14), n.lineTo(6, 30), n.stroke()), n.beginPath(), n.arc(26, 10, 6, 15, Math.PI / 5, 0), n.arc(50, 34, 6, 4, Math.PI / 1.4, 0), n.moveTo(6, 14), n.lineTo(46, 14), n.lineTo(46, 58), n.lineTo(6, 58), n.lineTo(6, 42), n.lineTo(6, 40), o || n.stroke(), n.clip(), n.drawImage(
            B,
            -x.left,
            -x.top,
            h,
            A
          ), n.drawImage(j, -x.left, -x.top, 320, 160), o ? r(10, 36, 6, n) : (n.beginPath(), n.lineWidth = 1, n.fillStyle = "#fff", n.arc(10, 36, 6, 4, Math.PI / 1, 0), n.fill(), n.stroke());
          const E = n.getImageData(0, 0, 320, 320);
          if (window.devicePixelRatio) {
            var q = v.width, C = v.height;
            v.height = C * window.devicePixelRatio, v.width = q * window.devicePixelRatio, n.scale(window.devicePixelRatio, window.devicePixelRatio);
          }
          const P = E.data;
          for (let k = 0; k < P.length; k += 4) {
            let ee = P[k], te = P[k + 1], se = P[k + 2];
            ee === 255 && te === 255 && se === 255 && (P[k + 3] = 0);
          }
          n.putImageData(E, 0, 0), l(v.toDataURL("image/jpg", 1));
        }, j.onerror = function() {
          b("");
        };
      });
    };
    return (o, r) => (openBlock(), createElementBlock("div", Ye, [
      createBaseVNode("div", De, [
        createBaseVNode("div", Ue, [
          createBaseVNode("div", He, [
            createBaseVNode("div", { class: "other-operation" }, [
              createBaseVNode("div", {
                class: "refresh-but",
                onClick: H
              }, We)
            ]),
            createBaseVNode("img", {
              class: "backend-img",
              src: t.backendImg
            }, null, 8, Ge),
            createBaseVNode("div", {
              class: "slider-jigsaw",
              style: normalizeStyle({
                left: T.left + "px",
                top: T.top + "px",
                transition: a.isPress ? "0s" : "0.3s",
                opacity: !a.isPress && z.value ? 0 : 1
              })
            }, [
              createBaseVNode("img", { src: f.value }, null, 8, qe)
            ], 4),
            createBaseVNode("div", {
              class: "slider-defect",
              style: normalizeStyle({
                left: x.left + "px",
                top: x.top + "px",
                opacity: !a.isPress && z.value ? 0 : 1
              })
            }, [
              createBaseVNode("img", { src: p.value }, null, 8, Ke)
            ], 4),
            createBaseVNode("div", Je, [
              createVNode(be, {
                ref_key: "tipRef",
                ref: i,
                state: a.state === 0 || a.state === 3 ? 0 : a.state,
                errTip: "向右滑动滑块进行正确拼合"
              }, null, 8, ["state"])
            ])
          ]),
          createBaseVNode("div", Qe, [
            createBaseVNode("div", {
              class: "slider-but-box-tip",
              style: normalizeStyle({
                color: !a.isPress && a.state !== 1 ? "#C7C7C7" : unref($),
                border: a.isPress ? `1px solid ${unref($)}` : "1px solid #EBEBEB"
              })
            }, "向右滑动滑块进行正确拼合", 4),
            a.state === 0 || a.state === 3 ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "slider-static-but",
              style: normalizeStyle({
                left: a.left + "px",
                transition: a.isPress ? "0s" : "0.3s"
              }),
              onMousedown: G
            }, et, 36)) : a.state === 1 ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: "slider-static-but2",
              style: normalizeStyle({
                left: a.left + "px",
                transition: a.isPress ? "0s" : "0.3s"
              })
            }, st, 4)) : a.state === 2 ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: "slider-static-but3",
              style: normalizeStyle({
                left: a.left + "px",
                transition: a.isPress ? "0s" : "0.3s"
              })
            }, ot, 4)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: "slider-road",
              style: normalizeStyle({ "pointer-events": a.isPress ? "all" : "none" })
            }, [
              createBaseVNode("div", {
                class: "slider-road-backend",
                style: normalizeStyle({
                  backgroundColor: unref($)
                })
              }, null, 4)
            ], 4)
          ])
        ])
      ])
    ]));
  }
});
var at = me(it, [["__scopeId", "data-v-1ec7cd44"]]);
var lt = { class: "other-operation" };
var ct = createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-arrow-clockwise",
  viewBox: "0 0 16 16"
}, [
  createBaseVNode("path", {
    "fill-rule": "evenodd",
    d: "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
  }),
  createBaseVNode("path", { d: "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" })
], -1);
var ut = [
  ct
];
var ft = defineComponent({
  __name: "index",
  emits: {
    click: null
  },
  setup(e, { emit: s }) {
    const t = () => {
      s("click");
    };
    return (i, f) => (openBlock(), createElementBlock("div", lt, [
      createBaseVNode("div", {
        class: "refresh-but",
        onClick: t
      }, ut)
    ]));
  }
});
var dt = defineComponent({
  name: "Drag-captcha",
  props: {
    //背景图
    backendImg: {
      type: String,
      default: "",
      required: true
    },
    //对换的图片
    crossPosition: {
      type: Array
    },
    /**失败几次刷新 */
    errHowTimesRefresh: {
      type: Number,
      default: 1
    },
    /**是否需要后端校验 */
    isBackendCheck: {
      type: Boolean,
      default: false
    }
  },
  emit: {
    verifyRefresh: null,
    /**验证成功 */
    verifySuccess: null,
    /**验证失败 */
    verifyError: null,
    /**后端校验调用 */
    verifyChange: null
  },
  setup(e, {
    emit: s
  }) {
    let t = reactive({
      jigsawPuzzleList: []
    }), i = -1, f = 0, p = 0, m = {
      styles: {
        left: "",
        top: ""
      },
      index: -1
    }, w = {
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0
    }, _ = 0, h = 0;
    const A = ref(), a = ref(0);
    let x = [], T = 0, $ = true, F = 0, X = 0;
    watch(e, () => {
      N();
    }), onMounted(() => {
      N();
    });
    const N = () => {
      const g = (l) => {
        const b = Math.floor(Math.random() * 7);
        return l === void 0 || b !== l ? b : g(l);
      };
      let u = [];
      const y = [0, 1, 2, 3, 4, 5, 6, 7], o = [...y], {
        crossPosition: r
      } = e;
      r != null && r.length && (r == null ? void 0 : r.length) >= 2 && r[0] !== r[1] ? (_ = r[0], h = r[1]) : (_ = g(), h = g(_)), y[_] = o[h], y[h] = o[_], y.forEach((l, b) => {
        let {
          x: j,
          y: v
        } = I(b);
        const n = I(l);
        u.push({
          styles: {
            left: j + "px",
            top: v + "px",
            backgroundImage: `url(${e.backendImg})`,
            backgroundPosition: `${-n.x}px ${-n.y}px`,
            zIndex: 1
          },
          key: b
        });
      }), t.jigsawPuzzleList = u, x = u;
    }, I = (g) => {
      let u = g % 4 * 80, y = parseInt(String(g / 4)) * 80;
      return {
        x: u,
        y
      };
    }, z = (g) => {
      const u = g.sort((y, o) => o - y);
      return u[1] < -1 ? 0 : u[1];
    }, Y = (g, u) => {
      if (!$)
        return;
      F = Math.floor(z([u % 4 * 80, 320]) / 80) + 1, X = Math.floor(u / 4) + 1, document.addEventListener("mousemove", G), document.addEventListener("mouseup", D), $ = false, A.value.startTime(), f = g.clientX + 8, p = g.clientY + 8, w = {
        startX: g.clientX,
        startY: g.clientY,
        endX: 0,
        endY: 0
      }, i = u, m.index = u, m.styles = {
        left: t.jigsawPuzzleList[u].styles.left,
        top: t.jigsawPuzzleList[u].styles.top
      };
      const y = t.jigsawPuzzleList;
      for (let o = y.length; o--; ) {
        const r = y[o];
        o === u ? (r.styles.zIndex = 10, r.styles.transition = "0s") : r.styles.transition = "0.3s";
      }
      t.jigsawPuzzleList = y;
    }, G = (g) => {
      const u = g.clientX + 8, y = g.clientY + 8, {
        x: o,
        y: r
      } = I(i), l = t.jigsawPuzzleList;
      l[i].styles.left = u - f + o + "px", l[i].styles.top = y - p + r + "px";
      const b = Math.floor(z([u - 40 + F * 80 - f, 319.9]) / 80), j = Math.floor(z([y - 40 + X * 80 - p, 159.9]) / 80), v = b + j * 4;
      if (v > -1 && v !== m.index) {
        const n = m.index;
        l[n].styles = {
          ...l[n].styles,
          ...m.styles
        }, m.styles = {
          left: l[v].styles.left,
          top: l[v].styles.top
        }, m.index = v;
        let {
          x: B,
          y: E
        } = I(i);
        l[v].styles.left = B + "px", l[v].styles.top = E + "px";
      }
      t.jigsawPuzzleList = l;
    }, D = (g) => {
      const u = g.clientX, y = g.clientY;
      w.endX = u, w.endY = y;
      const o = [...t.jigsawPuzzleList], r = m.index, l = o[i];
      let {
        x: b,
        y: j
      } = I(r);
      o[i].styles = {
        ...o[i].styles,
        left: b + "px",
        top: j + "px",
        transition: "0.3s",
        zIndex: 1
      }, t.jigsawPuzzleList = o, document.removeEventListener("mousemove", G), document.removeEventListener("mouseup", D);
      const v = A.value.stopTime();
      setTimeout(() => {
        o[i] = o[r], o[r] = l, i = -1, t.jigsawPuzzleList = o, o[_].key === h && o[h].key === _ ? (a.value = 1, e.isBackendCheck ? s("verifyChange", {
          ...w,
          processTime: v
        }, (n) => {
          n ? s("verifySuccess") : (s("verifyError"), U());
        }) : s("verifySuccess")) : (s("verifyError"), a.value = 2, U(), setTimeout(() => {
          a.value = 0;
        }, 900));
      }, 100);
    }, U = () => {
      setTimeout(() => {
        $ = true, T++, T >= e.errHowTimesRefresh ? H() : t.jigsawPuzzleList = x;
      }, 900);
    }, H = () => {
      s("verifyRefresh"), N();
    };
    return () => createVNode("div", {
      class: "drag-captcha-root"
    }, [t.jigsawPuzzleList.map((g, u) => createVNode("div", {
      class: "content-img-block",
      style: g.styles,
      key: g.key,
      onMousedown: (y) => Y(y, u)
    }, null)), createVNode("div", {
      style: {
        width: "100%",
        height: "20px",
        position: "absolute",
        left: 0,
        bottom: 0
      }
    }, [createVNode(be, {
      ref: A,
      state: a.value
    }, null)]), createVNode(ft, {
      onClick: () => H()
    }, null)]);
  }
});
var pt = Object.freeze(Object.defineProperty({
  __proto__: null,
  DragCaptcha: dt,
  SliderCaptcha: at
}, Symbol.toStringTag, { value: "Module" }));
var gt = typeof global == "object" && global && global.Object === Object && global;
var we = gt;
var ht = typeof self == "object" && self && self.Object === Object && self;
var yt = we || ht || Function("return this")();
var _e = yt;
var vt = _e.Symbol;
var J = vt;
var Te = Object.prototype;
var mt = Te.hasOwnProperty;
var bt = Te.toString;
var V = J ? J.toStringTag : void 0;
function wt(e) {
  var s = mt.call(e, V), t = e[V];
  try {
    e[V] = void 0;
    var i = true;
  } catch {
  }
  var f = bt.call(e);
  return i && (s ? e[V] = t : delete e[V]), f;
}
var _t = Object.prototype;
var Tt = _t.toString;
function xt(e) {
  return Tt.call(e);
}
var jt = "[object Null]";
var Pt = "[object Undefined]";
var fe = J ? J.toStringTag : void 0;
function ne(e) {
  return e == null ? e === void 0 ? Pt : jt : fe && fe in Object(e) ? wt(e) : xt(e);
}
function ie(e) {
  return e != null && typeof e == "object";
}
var It = Array.isArray;
var xe = It;
function kt(e) {
  var s = typeof e;
  return e != null && (s == "object" || s == "function");
}
function St(e) {
  return e;
}
var zt = "[object AsyncFunction]";
var At = "[object Function]";
var $t = "[object GeneratorFunction]";
var Et = "[object Proxy]";
function Ct(e) {
  if (!kt(e))
    return false;
  var s = ne(e);
  return s == At || s == $t || s == zt || s == Et;
}
function Ot(e, s) {
  for (var t = -1, i = e == null ? 0 : e.length; ++t < i && s(e[t], t, e) !== false; )
    ;
  return e;
}
var Bt = 9007199254740991;
var Lt = /^(?:0|[1-9]\d*)$/;
function Mt(e, s) {
  var t = typeof e;
  return s = s ?? Bt, !!s && (t == "number" || t != "symbol" && Lt.test(e)) && e > -1 && e % 1 == 0 && e < s;
}
var Rt = 9007199254740991;
function je(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Rt;
}
function Pe(e) {
  return e != null && je(e.length) && !Ct(e);
}
var Ft = Object.prototype;
function Xt(e) {
  var s = e && e.constructor, t = typeof s == "function" && s.prototype || Ft;
  return e === t;
}
function Nt(e, s) {
  for (var t = -1, i = Array(e); ++t < e; )
    i[t] = s(t);
  return i;
}
var Yt = "[object Arguments]";
function de(e) {
  return ie(e) && ne(e) == Yt;
}
var Ie = Object.prototype;
var Dt = Ie.hasOwnProperty;
var Ut = Ie.propertyIsEnumerable;
var Ht = de(function() {
  return arguments;
}()) ? de : function(e) {
  return ie(e) && Dt.call(e, "callee") && !Ut.call(e, "callee");
};
var Vt = Ht;
function Wt() {
  return false;
}
var ke = typeof exports == "object" && exports && !exports.nodeType && exports;
var pe = ke && typeof module == "object" && module && !module.nodeType && module;
var Gt = pe && pe.exports === ke;
var ge = Gt ? _e.Buffer : void 0;
var qt = ge ? ge.isBuffer : void 0;
var Kt = qt || Wt;
var Jt = Kt;
var Qt = "[object Arguments]";
var Zt = "[object Array]";
var es = "[object Boolean]";
var ts = "[object Date]";
var ss = "[object Error]";
var rs = "[object Function]";
var os = "[object Map]";
var ns = "[object Number]";
var is = "[object Object]";
var as = "[object RegExp]";
var ls = "[object Set]";
var cs = "[object String]";
var us = "[object WeakMap]";
var fs = "[object ArrayBuffer]";
var ds = "[object DataView]";
var ps = "[object Float32Array]";
var gs = "[object Float64Array]";
var hs = "[object Int8Array]";
var ys = "[object Int16Array]";
var vs = "[object Int32Array]";
var ms = "[object Uint8Array]";
var bs = "[object Uint8ClampedArray]";
var ws = "[object Uint16Array]";
var _s = "[object Uint32Array]";
var d = {};
d[ps] = d[gs] = d[hs] = d[ys] = d[vs] = d[ms] = d[bs] = d[ws] = d[_s] = true;
d[Qt] = d[Zt] = d[fs] = d[es] = d[ds] = d[ts] = d[ss] = d[rs] = d[os] = d[ns] = d[is] = d[as] = d[ls] = d[cs] = d[us] = false;
function Ts(e) {
  return ie(e) && je(e.length) && !!d[ne(e)];
}
function xs(e) {
  return function(s) {
    return e(s);
  };
}
var Se = typeof exports == "object" && exports && !exports.nodeType && exports;
var W = Se && typeof module == "object" && module && !module.nodeType && module;
var js = W && W.exports === Se;
var oe = js && we.process;
var Ps = function() {
  try {
    var e = W && W.require && W.require("util").types;
    return e || oe && oe.binding && oe.binding("util");
  } catch {
  }
}();
var he = Ps;
var ye = he && he.isTypedArray;
var Is = ye ? xs(ye) : Ts;
var ks = Is;
var Ss = Object.prototype;
var zs = Ss.hasOwnProperty;
function As(e, s) {
  var t = xe(e), i = !t && Vt(e), f = !t && !i && Jt(e), p = !t && !i && !f && ks(e), m = t || i || f || p, w = m ? Nt(e.length, String) : [], _ = w.length;
  for (var h in e)
    (s || zs.call(e, h)) && !(m && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    f && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    p && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    Mt(h, _))) && w.push(h);
  return w;
}
function $s(e, s) {
  return function(t) {
    return e(s(t));
  };
}
var Es = $s(Object.keys, Object);
var Cs = Es;
var Os = Object.prototype;
var Bs = Os.hasOwnProperty;
function Ls(e) {
  if (!Xt(e))
    return Cs(e);
  var s = [];
  for (var t in Object(e))
    Bs.call(e, t) && t != "constructor" && s.push(t);
  return s;
}
function Ms(e) {
  return Pe(e) ? As(e) : Ls(e);
}
function Rs(e) {
  return function(s, t, i) {
    for (var f = -1, p = Object(s), m = i(s), w = m.length; w--; ) {
      var _ = m[e ? w : ++f];
      if (t(p[_], _, p) === false)
        break;
    }
    return s;
  };
}
var Fs = Rs();
var Xs = Fs;
function Ns(e, s) {
  return e && Xs(e, s, Ms);
}
function Ys(e, s) {
  return function(t, i) {
    if (t == null)
      return t;
    if (!Pe(t))
      return e(t, i);
    for (var f = t.length, p = s ? f : -1, m = Object(t); (s ? p-- : ++p < f) && i(m[p], p, m) !== false; )
      ;
    return t;
  };
}
var Ds = Ys(Ns);
var Us = Ds;
function Hs(e) {
  return typeof e == "function" ? e : St;
}
function Vs(e, s) {
  var t = xe(e) ? Ot : Us;
  return t(e, Hs(s));
}
var Gs = {
  install: (e) => {
    Vs(pt, (s) => {
      e.component(s.name, s);
    });
  }
};
export {
  dt as DragCaptcha,
  at as SliderCaptcha,
  Gs as default
};
//# sourceMappingURL=vue3-action-captcha.js.map
