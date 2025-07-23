function f0(a1, a2) {
    for (let v3 = 0; v3 < 250; v3++) {
        const v4 = /\P{Decimal_Number}(a\bceW)/mis;
        v4.test(v4);
    }
    return a2;
}
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    function f12() {
        return f0;
    }
    function f13(a14) {
        return a10;
    }
    Object.defineProperty(a8, "constructor", { enumerable: true, get: f12, set: f13 });
    const t16 = a10.constructor;
    t16();
}
new F6(F6, F6, F6);
gc();
