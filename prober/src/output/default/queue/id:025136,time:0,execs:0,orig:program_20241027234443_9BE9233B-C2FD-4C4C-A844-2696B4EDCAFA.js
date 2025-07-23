function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v4 = v2.__proto__;
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F5(F5);
const v9 = new F0();
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    const v16 = v8.toString(v9, this, F0, v9, a12);
    v4.__proto__ = this;
    a13.h ^= v16;
}
const v17 = new F10(v9, v9);
new F10(v2, v17);
new F10(v3, F10);
gc();
