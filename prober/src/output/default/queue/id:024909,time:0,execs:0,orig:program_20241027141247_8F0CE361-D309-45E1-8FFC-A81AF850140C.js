const v0 = [26963,8,268435456,-1914503870,3,7,1073741823,-63999];
class C2 {
    constructor(a4, a5, a6, a7) {
        const v9 = new Uint8Array(a6);
        const v10 = v9.toBase64(this, this, a6, 255);
        const v12 = Float64Array.constructor;
        try { v12(v10); } catch (e) {}
    }
}
new C2(255, 255, v0);
gc();
