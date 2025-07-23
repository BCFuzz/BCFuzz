function f0(a1, a2) {
    for (let v3 = 0; v3 < 250; v3++) {
        const v4 = /\x0f{\ud808\udf45*/mis;
        v4.test(v4);
    }
    return a1;
}
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    function f12() {
        return f0;
    }
    function f13(a14) {
        return a14;
    }
    Object.defineProperty(a8, "constructor", { enumerable: true, get: f12, set: f13 });
    const t16 = a10.constructor;
    t16(this, a8, F6, F6);
}
new F6(F6, F6, F6);
gc();
