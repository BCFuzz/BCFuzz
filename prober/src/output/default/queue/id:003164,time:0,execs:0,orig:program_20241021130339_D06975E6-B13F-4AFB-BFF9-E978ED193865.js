function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3, a4, a5, a6) {
        const o7 = {
            __proto__: this,
        };
        return o7;
    }
    f2(f2, F0, this, F0).Int32Array;
}
const v10 = new F0();
const t11 = v10.constructor;
new t11();
new F0();
gc();
