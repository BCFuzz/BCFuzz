function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.__proto__;
}
new F0();
new F0();
const v7 = new Uint8Array(2);
delete v7[5];
v7[64] &= 2;
gc();
