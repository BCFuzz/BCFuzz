function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
new Uint8Array();
const v6 = new Int8Array();
class C7 {
    constructor(a9, a10, a11, a12) {
        this.e = this;
    }
    set e(a14) {
        v6.byteLength;
    }
}
new C7();
new C7();
gc();
