const v1 = [26963,8,268435456,-1914503870,3,7,1073741823,-63999];
class C3 {
    constructor(a5, a6, a7, a8) {
        const v10 = new Uint8Array(a7);
        const v11 = v10.toBase64(v10, v10, eval, this);
        Float64Array.constructor = eval;
        const v13 = Float64Array.constructor;
        try { v13(v11); } catch (e) {}
    }
}
new C3(255, 255, v1);
gc();
