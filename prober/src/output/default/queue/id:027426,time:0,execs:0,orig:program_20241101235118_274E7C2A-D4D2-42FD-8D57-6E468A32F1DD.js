class C3 {
    static [-0.0] = -0.0;
    f = 536870889;
    p(a5, a6) {
        try { this["replaceAll"](); } catch (e) {}
    }
    get a() {
    }
}
const v11 = new C3();
function f12(a13, a14, a15) {
}
f12();
v11.p(-0.0);
const o28 = {
    n(a21, a22, a23) {
        const v24 = this;
        const t17 = v24.Intl.Segmenter;
        const v27 = new t17();
        return v27;
    },
};
const t22 = o28.n;
const v30 = t22();
const v31 = v30.segment();
const v32 = [7.557860512229595,-1e-15,319.89261808269794];
const v33 = v30.segment();
function f34(a35, a36) {
    return a35(1, a36, a36, ...v32, ...v31);
}
v33.toString = f34;
try { v33.toLocaleString(); } catch (e) {}
gc();
