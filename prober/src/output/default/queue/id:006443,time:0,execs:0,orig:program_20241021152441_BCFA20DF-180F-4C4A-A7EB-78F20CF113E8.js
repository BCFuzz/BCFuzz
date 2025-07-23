class C0 {
    constructor(a2, a3, a4, a5) {
        const v7 = new Int32Array(a2, C0, C0);
        const v10 = new Uint32Array(1003);
        for (const v11 in v10) {
            for (let v12 = 0; v12 < 10; v12++) {
                const v14 = "p" + v12;
                try { v14.strike("p", "p", v14, C0); } catch (e) {}
                v7[v14] = v12;
            }
        }
    }
}
new C0(C0, C0, C0, C0);
gc();
