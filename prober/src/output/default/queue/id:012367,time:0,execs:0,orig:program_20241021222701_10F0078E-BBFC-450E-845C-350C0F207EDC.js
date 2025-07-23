const v2 = new BigUint64Array();
class C3 {
    constructor(a5, a6, a7) {
        a5.from(v2);
    }
}
try { new C3(Uint8Array); } catch (e) {}
gc();
