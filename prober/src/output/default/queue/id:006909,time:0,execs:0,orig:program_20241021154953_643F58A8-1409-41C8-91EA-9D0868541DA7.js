for (let v0 = 0; v0 < 10; v0++) {
    const v2 = new Set();
    const v3 = v2.union(v2);
    const v4 = v3.entries();
    class C5 {
        2359 = v4;
    }
    const v6 = new C5();
    async function f7(a8, a9, a10) {
        const o11 = {
        };
        const v13 = new Proxy(v6, o11);
        await v13;
    }
    f7(f7, v3, f7);
    for (let v16 = 0; v16 < 25; v16++) {
        const o19 = {
            set f(a18) {
            },
        };
    }
}
gc();
