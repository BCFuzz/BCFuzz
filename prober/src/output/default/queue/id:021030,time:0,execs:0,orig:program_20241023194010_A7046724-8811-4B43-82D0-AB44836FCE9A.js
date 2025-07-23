for (let v0 = 0; v0 < 10; v0++) {
    function f1() {
        const v3 = Symbol.toPrimitive;
        function F4(a6, a7, a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            a6.description;
            a7.description;
            const v14 = new Uint8Array(209);
            for (const v15 in v14) {
            }
        }
        const v16 = new F4(v3, v3);
        const t12 = v16.constructor;
        new t12(Symbol, v0);
        return f1;
    }
    class C19 extends f1 {
    }
    new C19();
}
gc();
