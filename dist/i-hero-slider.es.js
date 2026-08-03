import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, defineComponent as o, normalizeClass as s, openBlock as c, ref as l, renderList as u, resolveDynamicComponent as d, unref as f, watch as p } from "vue";
//#region src/components/HeroSlider/components/Slide/index.vue?vue&type=script&setup=true&lang.ts
var m = ["src"], h = { class: "hero-slide-content" }, g = ["innerHTML"], _ = /*@__PURE__*/ o({
	__name: "index",
	props: {
		src: {},
		content: {},
		show: { type: Boolean }
	},
	setup(e) {
		return (t, r) => (c(), i("div", { class: s(["hero-slide", { show: e.show }]) }, [a("img", {
			src: e.src,
			class: "hero-slide-img"
		}, null, 8, m), a("div", h, [typeof e.content == "string" ? (c(), i("div", {
			key: 1,
			style: {
				width: "100%",
				height: "100%"
			},
			innerHTML: e.content
		}, null, 8, g)) : (c(), n(d(e.content), { key: 0 }))])], 2));
	}
}), v = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, y = /* @__PURE__ */ v(_, [["__scopeId", "data-v-80b7db74"]]), b = { class: "hero-slider" }, x = {
	key: 0,
	class: "hero-slider-arrows"
}, S = {
	key: 1,
	class: "hero-slider-dots"
}, C = ["onClick"], w = /* @__PURE__ */ v(/* @__PURE__ */ o({
	__name: "index",
	props: {
		slides: {},
		arrows: {
			type: Boolean,
			default: !0
		},
		dots: {
			type: Boolean,
			default: !0
		},
		autoplay: {
			type: Boolean,
			default: !0
		},
		infinite: {
			type: Boolean,
			default: !0
		},
		autoplayDuration: { default: 3e3 }
	},
	setup(o) {
		let d = l(0), m = t(() => d.value === 0), h = t(() => d.value === o.slides.length - 1), g = () => {
			!o.infinite && !h.value || o.infinite && !h.value ? d.value++ : o.infinite && h.value && (d.value = 0);
		}, _ = () => {
			!o.infinite && !m.value || o.infinite && !m.value ? d.value-- : o.infinite && m.value && (d.value = o.slides.length - 1);
		};
		return p([
			d,
			() => o.autoplay,
			() => o.slides,
			() => o.autoplayDuration
		], (e, t, n) => {
			if (!o.autoplay) return;
			let r = setTimeout(g, o.autoplayDuration);
			n(() => {
				clearTimeout(r);
			});
		}, { immediate: !0 }), (t, l) => (c(), i("section", b, [
			(c(!0), i(e, null, u(o.slides, (e, t) => (c(), n(f(y), {
				show: d.value === t,
				key: t,
				src: e.src,
				content: e.content
			}, null, 8, [
				"show",
				"src",
				"content"
			]))), 128)),
			o.arrows ? (c(), i("div", x, [a("button", {
				onClick: l[0] ||= (e) => _(),
				type: "button",
				class: s(["hero-slider-arrow hero-slider-arrow-left", { disabled: m.value && !o.infinite }])
			}, [...l[2] ||= [a("svg", {
				viewBox: "64 64 896 896",
				focusable: "false",
				"data-icon": "left",
				width: "1em",
				height: "1em",
				fill: "currentColor",
				"aria-hidden": "true"
			}, [a("path", { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" })], -1)]], 2), a("button", {
				onClick: l[1] ||= (e) => g(),
				type: "button",
				class: s(["hero-slider-arrow hero-slider-arrow-right", { disabled: h.value && !o.infinite }])
			}, [...l[3] ||= [a("svg", {
				viewBox: "64 64 896 896",
				focusable: "false",
				"data-icon": "right",
				width: "1em",
				height: "1em",
				fill: "currentColor",
				"aria-hidden": "true"
			}, [a("path", { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" })], -1)]], 2)])) : r("", !0),
			o.dots ? (c(), i("div", S, [(c(!0), i(e, null, u(o.slides, (e, t) => (c(), i("button", {
				onClick: (e) => d.value = t,
				type: "button",
				key: t,
				class: s(["hero-slider-dot", { active: d.value === t }])
			}, null, 10, C))), 128))])) : r("", !0)
		]));
	}
}), [["__scopeId", "data-v-512c1211"]]), T = { install(e) {
	e.component("HeroSlider", w);
} };
//#endregion
export { w as HeroSlider, T as default };
