for (let i = 0; i < 5; i++) {
    class C0 {
    }
    const v1 = new C0();
    async function f2(a3, a4, a5) {
        const o6 = {
        };
        const v8 = new Proxy(v1, o6);
        function f9(a10, a11) {
            a10(a10);
            return Proxy;
        }
        v8.then = f9;
        await v8;
        return f2;
    }
    f2(v1, v1, f2);
}
gc();
