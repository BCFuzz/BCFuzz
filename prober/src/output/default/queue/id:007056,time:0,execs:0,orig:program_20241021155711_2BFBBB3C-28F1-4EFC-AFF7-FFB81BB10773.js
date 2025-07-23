function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3, a4, a5, a6) {
        const o7 = {
            __proto__: this,
        };
        return o7;
    }
    const v8 = f2();
    v8.globalThis = v8;
}
const v9 = new F0();
const v10 = v9.constructor;
new v10(v10, v10, v9, F0);
new F0();
gc();
