try { Uint32Array.call(Float64Array); } catch (e) {}
class C7 {
    constructor(a9, a10, a11, a12) {
        for (let i = 0; i < 5; i++) {
            new Uint8Array(a12);
        }
    }
}
const v14 = new C7();
new C7(1000, -9007199254740991, v14, 4294967296);
gc();
