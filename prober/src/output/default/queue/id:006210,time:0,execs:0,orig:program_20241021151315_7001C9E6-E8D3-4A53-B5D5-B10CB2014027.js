function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f3() {
        return f3;
    }
    function f4(a5) {
        return f4;
    }
    Object.defineProperty(BigUint64Array, "valueOf", { enumerable: true, get: f3, set: f4 });
    const v6 = this.constructor;
    try { new v6(v6); } catch (e) {}
}
new F0();
gc();
