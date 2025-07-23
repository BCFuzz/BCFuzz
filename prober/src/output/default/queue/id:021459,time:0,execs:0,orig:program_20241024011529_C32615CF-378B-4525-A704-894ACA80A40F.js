for (let v0 = 0; v0 < 10; v0++) {
    const v2 = new Set();
    const v3 = v2.union(v2);
    class C4 {
    }
    const v5 = new C4();
    async function f6(a7, a8, a9) {
        const v10 = a8.isSupersetOf(a8);
        const v12 = a8.has(a9, v10 && v10);
        v12 || v12;
        const o14 = {
        };
        const v16 = new Proxy(v5, o14);
        await v16;
        return v2;
    }
    f6(f6, v3);
}
gc();
