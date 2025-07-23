function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a3;
    for (let i = 0; i < 10; i++) {
        delete this.h;
    }
}
const v5 = new F0(F0, F0);
const v6 = v5.e;
let v7;
try { v7 = v6(); } catch (e) {}
new F0(F0, v7);
for (let i11 = 10, i12 = 10; -13369 !== i12; i12--) {
}
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
}
gc();
