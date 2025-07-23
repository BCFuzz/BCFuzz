const o2 = {
    "maxByteLength": 4294967296,
};
const v4 = new ArrayBuffer(4, o2);
class C6 extends Float64Array {
}
class C7 {
    constructor(a9) {
        try { new a9(v4); } catch (e) {}
    }
}
const v11 = new C7();
const t12 = v11.constructor;
new t12(C6);
gc();
