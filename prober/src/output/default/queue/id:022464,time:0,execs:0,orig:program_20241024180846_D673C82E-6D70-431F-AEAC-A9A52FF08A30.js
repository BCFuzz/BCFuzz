for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i18 = 0, i19 = 10; i19--, i18 < i19;) {
    }
}
const v26 = new F10();
const v29 = new Uint8ClampedArray(255);
for (const v30 in v29) {
    const o31 = {
    };
    function f32() {
        return f32;
    }
    function f33(a34) {
        const v35 = o31[6];
        let v36;
        try { v36 = v29.toLocaleString(v30); } catch (e) {}
        v26[v36] ^= a34;
        for (let v37 = 0; v37 < 5; v37++) {
        }
        delete v26[v35];
        return f32;
    }
    Object.defineProperty(o31, "a", { configurable: true, enumerable: true, get: f32, set: f33 });
    o31.a = v30;
}
gc();
