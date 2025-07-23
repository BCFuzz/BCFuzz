const v1 = new BigUint64Array();
class C3 {
}
const v4 = new C3();
const v5 = new C3();
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    eval(a9);
}
const v14 = new F6(F6, C3, v5, C3);
new F6(v5, v14, v4, v5, 128, v1);
gc();
