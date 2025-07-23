function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 128;
}
const v3 = new F0();
const v4 = new F0();
v3[v4] = v4;
Object.values(v4);
gc();
