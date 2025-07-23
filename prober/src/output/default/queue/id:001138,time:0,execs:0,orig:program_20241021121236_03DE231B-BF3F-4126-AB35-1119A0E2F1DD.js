function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0();
const t4 = this.ArrayBuffer;
const v15 = new t4(v5);
class C22 {
    constructor(a24, a25, a26, a27) {
        const v28 = this.constructor;
        try { new v28(0, F0); } catch (e) {}
        super[a24];
    }
}
const v31 = new C22();
new C22(Int32Array, v15, v31, 0);
gc();
