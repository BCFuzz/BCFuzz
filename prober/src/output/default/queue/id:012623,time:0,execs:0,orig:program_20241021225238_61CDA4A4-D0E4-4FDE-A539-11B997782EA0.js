const v1 = `
    class C2 {
    }
    const v3 = new C2();
    function f4(a5, a6) {
        const o7 = {
            __proto__: C2,
        };
        return Symbol;
    }
    async function f8(a9, a10, a11) {
        const o12 = {
        };
        o12.set = Symbol;
        function f13(a14, a15) {
            return gc;
        }
        o12.get = f13;
        try { Proxy(); } catch (e) {}
        const v19 = new Proxy(v3, o12);
        v19.then = f13;
        function f20(a21) {
            return a21;
        }
        return f8;
    }
    f8();
`;
eval(v1);
gc();
