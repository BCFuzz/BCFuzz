const v0 = `
    class C1 {
    }
    const v2 = new C1();
    async function f3(a4, a5, a6) {
        const o7 = {
        };
        try { Proxy(); } catch (e) {}
        const v10 = new Proxy(v2, o7);
        function f11(a12) {
            return a12;
        }
        class C13 extends f11 {
        }
        const v14 = await v10;
        try { v14.propertyIsEnumerable(); } catch (e) {}
        return v0;
    }
    f3();
`;
eval(v0);
gc();
