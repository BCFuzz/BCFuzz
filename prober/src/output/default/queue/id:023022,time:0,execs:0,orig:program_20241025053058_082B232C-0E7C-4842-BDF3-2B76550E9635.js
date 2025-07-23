class C0 {
    constructor(a2, a3) {
        for (let i = 0; i < 10; i++) {
            const v6 = new Int8Array(255);
            for (const v7 in v6) {
            }
            const v9 = new ArrayBuffer();
            const v11 = new DataView(v9);
            try { v11.setFloat64(v11, a2); } catch (e) {}
        }
    }
}
new C0();
gc();
