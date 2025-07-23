for (let v3 = 0; v3 < 10; v3++) {
    const v5 = new Set("copyWithin");
    const v6 = v5.union(v5);
    class C7 {
    }
    const v8 = new C7();
    async function f9(a10, a11, a12) {
        const v13 = a11.has(a12);
        const v14 = v13 || v13;
        v14 || v14;
        const o16 = {
        };
        const v18 = new Proxy(v8, o16);
        const v19 = await v18;
        try { v19.toString(); } catch (e) {}
        return v14;
    }
    f9(f9, v6);
}
gc();
