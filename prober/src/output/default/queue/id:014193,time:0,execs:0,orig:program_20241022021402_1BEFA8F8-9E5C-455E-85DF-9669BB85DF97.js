const v1 = new Set();
for (let v3 = 0; v3 < 10; v3++) {
    class C4 {
    }
    const v5 = new C4();
    async function f6(a7, a8, a9) {
        const o10 = {
        };
        const o17 = {
            toString(a12, a13) {
                const t10 = a13.constructor;
                const v15 = t10();
                v15 && v15;
                return o10;
            },
        };
        o17.toString(v1, -32313);
        const v20 = new Proxy(v5, o10);
        await v20;
        return f6;
    }
    f6(v1, v3, v3);
}
gc();
