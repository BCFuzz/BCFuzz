for (let v0 = 0; v0 < 10; v0++) {
    class C1 {
    }
    const v2 = new C1();
    async function f3(a4, a5, a6) {
        const o7 = {
        };
        const v9 = new Proxy(v2, o7);
        function f10(a11, a12) {
            const v15 = 915999.996287779 - 1005984348;
            C1 | v15;
            return v15;
        }
        v9.then = f10;
        await v9;
        return f10;
    }
    f3(v2, C1, f3);
}
gc();
