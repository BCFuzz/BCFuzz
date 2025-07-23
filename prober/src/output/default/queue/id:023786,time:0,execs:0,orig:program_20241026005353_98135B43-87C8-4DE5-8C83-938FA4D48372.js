function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.length = 1898669592;
}
const v3 = new F0();
try { new Float64Array(v3); } catch (e) {}
for (let i8 = -1, i9 = 10; i8 < i9; i9--) {
}
gc();
