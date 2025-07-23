const v1 = [2.0,-4.0];
function f2(a3, a4, a5) {
    for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
    }
    function f16() {
        eval.defineProperty = eval;
        f16 = eval;
        return eval;
    }
    f16("d", a5, f2, v1, v1);
    const v21 = Proxy.revocable(f16, f16).proxy;
    Object.defineProperty(v21, "ownKeys", { writable: true, configurable: true, value: "d" });
    const v23 = this.constructor;
    try { v23.freeze(v21); } catch (e) {}
    for (let i27 = -2976, i28 = 10; i27 !== i28; i28--) {
    }
    return f2;
}
const v35 = f2(v1, "d", f2);
function F36(a38, a39, a40, a41) {
    if (!new.target) { throw 'must be called with new'; }
    try { a41.constructor(a40, a39, a41, v35); } catch (e) {}
}
F36.constructor = v35;
new F36(v1, f2, v35, F36);
gc();
