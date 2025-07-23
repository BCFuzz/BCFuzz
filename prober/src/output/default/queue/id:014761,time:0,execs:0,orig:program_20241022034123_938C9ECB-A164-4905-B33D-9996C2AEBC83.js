const o15 = {
    set f(a2) {
        function F4(a6, a7) {
            if (!new.target) { throw 'must be called with new'; }
            const v8 = a6.constructor;
            function f9() {
                return a2 >= 9n;
            }
            Object.defineProperty(v8, Symbol.toPrimitive, { writable: true, configurable: true, enumerable: true, value: f9 });
            v8.asUintN(this, v8);
        }
        new F4(-1024n);
    },
};
o15.f = o15;
gc();
