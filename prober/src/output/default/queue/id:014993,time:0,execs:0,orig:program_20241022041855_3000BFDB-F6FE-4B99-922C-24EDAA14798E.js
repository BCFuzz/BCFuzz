function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = a6.constructor;
    function f9() {
        return 536870887 >= 9n;
    }
    Object.defineProperty(v8, Symbol.toPrimitive, { writable: true, configurable: true, enumerable: true, value: f9 });
    v8.asUintN(60557, v8);
}
new F4(-1024n);
for (let i17 = 10, i18 = 10; -13369 !== i18; i18--) {
}
gc();
