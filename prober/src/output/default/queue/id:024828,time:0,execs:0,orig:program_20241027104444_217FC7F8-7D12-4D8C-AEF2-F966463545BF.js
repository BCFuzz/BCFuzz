function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -9007199254740990;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
v5[Symbol.unscopables] = v3;
with (v5) {
    d = v4;
}
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
gc();
