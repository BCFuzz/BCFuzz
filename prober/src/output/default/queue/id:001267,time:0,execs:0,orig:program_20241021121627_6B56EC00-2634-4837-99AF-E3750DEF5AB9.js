function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 10;
    this.e = 10;
}
const v3 = new F0();
const v4 = new F0();
for (const v5 in v3) {
    v3[6] = v4;
}
gc();
