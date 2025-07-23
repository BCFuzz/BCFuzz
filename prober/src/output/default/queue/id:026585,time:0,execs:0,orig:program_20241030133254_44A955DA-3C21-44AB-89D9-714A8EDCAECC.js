for (let v0 = 0; v0 < 10; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        function f3(a4) {
            return v0;
        }
        const v7 = ("a").constructor;
        const v9 = Symbol.toPrimitive;
        Object.defineProperty(v7, v9, { configurable: true, value: f3 });
        const v10 = v7.fromCharCode(12, v7);
        const o15 = {
            n(a12, a13, a14) {
                return this;
            },
        };
        const t15 = o15.n;
        t15(v9).parseFloat(v10);
    }
    new F1();
}
gc();
