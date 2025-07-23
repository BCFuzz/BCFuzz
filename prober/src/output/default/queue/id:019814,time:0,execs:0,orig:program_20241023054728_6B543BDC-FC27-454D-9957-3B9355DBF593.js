function f0() {
    return f0;
}
class C1 {
    constructor(a3) {
        const v5 = new SharedArrayBuffer(C1, a3);
        const v7 = new DataView(v5);
        const v8 = v7.setFloat32;
        try { v8(v5, v5, f0); } catch (e) {}
        for (let v10 = 0; v10 < 100; v10++) {
        }
    }
}
const v11 = new C1();
const t14 = v11.constructor;
new t14(C1);
gc();
