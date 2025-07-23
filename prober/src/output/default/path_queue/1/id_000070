const v0 = `
    class C1 {
    }
    const v2 = new C1();
    async function f3(a4, a5, a6) {
        const o7 = {
        };
        o7.f = o7;
        try { Proxy(v2, a5); } catch (e) {}
        const v10 = new Proxy(v2, o7);
        try { v10.toLocaleString(); } catch (e) {}
        try { v10.then(); } catch (e) {}
        function f13(a14) {
        }
        class C15 extends f13 {
        }
        C15.length = C15;
        await v10;
        return v0;
    }
    f3(v0, f3, v2);
`;
eval(v0);
gc();
