const v2 = Array(95);
class C3 extends Array {
}
const v4 = new C3();
const v5 = new C3();
const v6 = new C3();
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    a10.splice(v6).pop(v4);
}
const v14 = new F7(v4, v5);
const t11 = v14.constructor;
new t11(v14, v2);
gc();
