class C0 {
    constructor(a2, a3) {
        for (let i = 0; i < 10; i++) {
            const v6 = new Int32Array(255);
            const v9 = new ArrayBuffer(a3, this);
            const v11 = new DataView(v9);
            try { v11.getFloat64(-5.0); } catch (e) {}
            for (const v13 in v6) {
            }
        }
    }
}
new C0();
gc();
