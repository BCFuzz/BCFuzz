const o0 = {
};
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = this.constructor;
    try { new v3(); } catch (e) {}
    o0.toPrimitive;
    function f6(a7) {
        return o0;
    }
    Object.defineProperty(o0, "c", { configurable: true, set: f6 });
}
new F1();
gc();
