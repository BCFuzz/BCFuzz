function f1(a2, a3) {
    return a3.f;
}
Float32Array.toString = f1;
const o14 = {
    n(a6, a7, a8) {
        const v9 = this;
        const t7 = v9.Intl.DateTimeFormat;
        const v12 = t7();
        let v13;
        try { v13 = v12.formatRange(Float32Array, Float32Array); } catch (e) {}
        return v13;
    },
};
const t14 = o14.n;
t14();
gc();
