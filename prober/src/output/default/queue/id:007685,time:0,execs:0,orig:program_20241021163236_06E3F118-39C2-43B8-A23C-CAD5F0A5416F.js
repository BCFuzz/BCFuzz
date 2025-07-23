const o2 = {
    "maxByteLength": 428,
};
const v4 = new ArrayBuffer(236, o2);
const v6 = new Uint8Array(v4);
class C7 {
    constructor(a9) {
        a9.setFromHex(Uint8Array, v4, this, v6);
    }
}
try { new C7(v6); } catch (e) {}
gc();
