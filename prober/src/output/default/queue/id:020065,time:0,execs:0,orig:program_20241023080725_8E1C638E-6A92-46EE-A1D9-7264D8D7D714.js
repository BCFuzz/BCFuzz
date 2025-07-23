function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
class C5 extends F1 {
}
const v6 = new C5();
class C8 extends Array {
    constructor(a10, a11) {
        super();
        const v14 = new Uint8Array(3129);
        for (const v15 in v14) {
            Math.clz32(a11);
        }
    }
}
new C8(v6, 12);
gc();
