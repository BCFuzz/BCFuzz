class C0 {
    constructor(a2, a3) {
        for (let i = 0; i < 10; i++) {
            const v6 = [255,255,255,255];
            const v9 = new ArrayBuffer(a2, a3);
            const v11 = new DataView(v9);
            try { v11.getFloat32(v6, -62330n); } catch (e) {}
            const v13 = new Int32Array(255);
            for (const v14 in v13) {
            }
        }
    }
}
new C0();
gc();
