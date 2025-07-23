const v0 = `
    class C1 {
    }
    const v2 = new C1();
    async function f3(a4, a5, a6) {
        const o7 = {
        };
        const v9 = new Proxy(v2, o7);
        try { v9.then(); } catch (e) {}
        function f11(a12) {
            return f3;
        }
        class C13 extends f11 {
        }
        await v9;
        return v0;
    }
    f3();
`;
eval(v0);
gc();
