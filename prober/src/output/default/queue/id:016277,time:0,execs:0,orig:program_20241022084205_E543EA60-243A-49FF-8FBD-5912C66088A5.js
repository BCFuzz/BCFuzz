function f1() {
    return 268435441;
}
const o17 = {
    set f(a4) {
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            this.valueOf = f1;
            const v10 = a8.constructor;
            function f11() {
                return a4 >= 9n;
            }
            Object.defineProperty(v10, Symbol.toPrimitive, { writable: true, configurable: true, enumerable: true, value: f11 });
            v10.asUintN(this, v10);
        }
        new F6(-1024n);
    },
};
o17.toString = f1;
o17.f = o17;
gc();
