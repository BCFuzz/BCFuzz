function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -256;
}
const v3 = new F0();
const v4 = new F0();
const v7 = new Uint8Array(155);
v7.toHex();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    const v13 = this.constructor;
    try { new v13(a12, this); } catch (e) {}
    a11.e = a11;
    this.g = a11;
    this.c = v3;
}
new F9(v4);
new F9(v3);
gc();
