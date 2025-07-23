const v1 = Date(Date);
class C2 extends Date {
}
const v3 = new C2();
const v4 = new C2();
function F5(a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    a9.toUTCString(a7, a8, a8);
}
const v11 = new F5(v1, v4, v3);
new F5(C2, v11, v3);
gc();
