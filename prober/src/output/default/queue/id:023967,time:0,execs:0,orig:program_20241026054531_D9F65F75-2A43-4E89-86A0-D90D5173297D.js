class C0 {
    constructor(a2, a3) {
        for (let i = 0; i < 10; i++) {
            const v6 = new Int32Array(255);
            let v8 = 1;
            const v9 = v8--;
            let v10 = -16 % v8;
            v10--;
            const v13 = new ArrayBuffer();
            const v15 = new DataView(v13);
            try { v15.getFloat64(v9); } catch (e) {}
            for (const v17 in v6) {
            }
        }
    }
}
new C0();
gc();
