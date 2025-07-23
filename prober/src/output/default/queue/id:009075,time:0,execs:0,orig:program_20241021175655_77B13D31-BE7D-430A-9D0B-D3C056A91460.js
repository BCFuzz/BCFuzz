for (let v0 = 0; v0 < 10; v0++) {
    const v2 = new Set();
    const v3 = v2.union(v2);
    class C4 {
    }
    const v5 = new C4();
    async function f6(a7, a8, a9) {
        const v10 = a8.has(a9);
        v10 || v10;
        const o12 = {
        };
        const v14 = new Proxy(v5, o12);
        await v14;
        return Set;
    }
    f6(f6, v3);
}
gc();
