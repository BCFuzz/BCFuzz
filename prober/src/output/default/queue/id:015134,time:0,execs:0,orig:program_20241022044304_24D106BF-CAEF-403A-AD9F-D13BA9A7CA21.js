function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3, a4, a5, a6) {
        const o7 = {
            __proto__: this,
        };
        return o7;
    }
    const v8 = f2(F0, F0, f2, F0);
    v8.NaN = v8;
}
new F0();
gc();
