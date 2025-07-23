for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a13;
    for (let i = 0; i < 10; i++) {
        delete this.h;
    }
}
const v15 = new F10();
const v16 = new F10(v15, v15);
const v17 = v16.constructor;
const v18 = [10,-32113,536870887,128,255,12,1];
const v19 = v18.shift;
let v20;
try { v20 = v19(v19, v18, v16, v15); } catch (e) {}
new v17(v20);
for (let i24 = 10, i25 = 10; -13369 !== i25; i25--) {
}
for (let i34 = 0, i35 = 10; i34 < i35; i35--) {
}
gc();
