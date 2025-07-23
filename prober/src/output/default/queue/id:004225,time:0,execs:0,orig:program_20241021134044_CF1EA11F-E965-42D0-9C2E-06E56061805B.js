class C2 extends Array {
}
const v3 = new C2();
const v4 = new C2();
const v5 = new C2();
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    a9[72] = 38054;
    a9.splice(v5);
}
new F6(v3, v4);
gc();
