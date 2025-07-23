const v0 = [10];
class C1 {
    constructor(a3, a4) {
        for (let i = 0; i < 10; i++) {
            const v8 = new ArrayBuffer();
            const v10 = new DataView(v8);
            try { v10.getInt8(v0); } catch (e) {}
            const v12 = new Int32Array(255);
            for (const v13 in v12) {
            }
        }
    }
}
new C1(v0, v0);
gc();
