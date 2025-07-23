const v0 = [1024,256,-9223372036854775807,1534819858];
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this.constructor;
    try { new v7(a4, v0); } catch (e) {}
    if (a3.shift()) {
        const t6 = Array().constructor;
        const v13 = t6();
        function f14(a15) {
            return a15;
        }
        Object.defineProperty(v13, 1, { configurable: true, set: f14 });
        new BigUint64Array(v13);
    }
}
new F1(v0);
gc();
