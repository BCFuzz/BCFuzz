for (let v0 = 0; v0 < 10; v0++) {
    class C1 {
        constructor(a3, a4, a5, a6) {
            for (let v7 = 0; v7 < 25; v7++) {
                const v9 = "p" + v7;
                v9.bold();
                this[v9] = v7;
                for (let v11 = 0; v11 < 500; v11++) {
                }
            }
        }
    }
    const v12 = new C1();
    async function f13(a14, a15, a16) {
        const o17 = {
        };
        const v19 = new Proxy(v12, o17);
        await v19;
        return v19;
    }
    f13(C1, C1, v0);
}
gc();
