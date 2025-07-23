const v0 = [128];
class C2 {
    constructor(a4, a5) {
        const v8 = new ArrayBuffer(19);
        new Float32Array(v8, a5, 3);
    }
}
const v11 = new C2();
const v12 = v11.constructor;
try { new v12(v0, 3); } catch (e) {}
gc();
