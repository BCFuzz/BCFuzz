class C1 {
}
class C2 extends C1 {
}
const v3 = new C2();
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const t7 = createGlobalObject().Float16Array;
    const v13 = new t7();
    v13.constructor = a9;
    v13.slice();
}
const v15 = new F4(C1, C1, C2, F4);
const v16 = v15.constructor;
try { new v16(-12n, v3, v15, -12n); } catch (e) {}
for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
}
gc();
