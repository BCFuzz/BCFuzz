for (let v0 = 0; v0 < 5; v0++) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        function f5(a6, a7, a8) {
            return a8;
        }
        for (let i11 = 10, i12 = 10; -13369 < i12; i12--) {
        }
        function F19(a21, a22) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v23 = new F19();
        const o25 = {
        };
        const v27 = new Proxy(v23, o25);
        v27[Symbol.toPrimitive] = Symbol;
        function F29(a31, a32, a33, a34) {
            if (!new.target) { throw 'must be called with new'; }
            Symbol.toPrimitive;
        }
        new F29(v0, v23, F1, o25);
        new F29();
    }
    new F1(F1, F1);
}
gc();
