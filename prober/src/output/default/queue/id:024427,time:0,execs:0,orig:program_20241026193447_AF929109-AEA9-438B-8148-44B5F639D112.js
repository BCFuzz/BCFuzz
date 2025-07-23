for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i18 = 0, i19 = 10; i19--, i18 < i19;) {
    }
}
const v26 = new F10(F10, F10, F10, F10);
const v29 = new Uint8ClampedArray(255);
for (const v30 in v29) {
    function f31() {
        return v29;
    }
    function f32(a33) {
        let v34;
        try { v34 = v29.toLocaleString(v30); } catch (e) {}
        v26[v34] ^= a33;
        return a33;
    }
    Object.defineProperty(v26, "a", { configurable: true, enumerable: true, get: f31, set: f32 });
    v26.a = v30;
}
gc();
