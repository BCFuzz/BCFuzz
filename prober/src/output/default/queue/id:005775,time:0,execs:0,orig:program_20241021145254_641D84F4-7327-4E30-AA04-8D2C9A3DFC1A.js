function f0(a1, a2) {
    return f0;
}
const v5 = Array(95);
v5[11] = f0;
class C6 extends Array {
}
const v7 = new C6();
const v8 = new C6();
const v9 = new C6();
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    a13.splice(v9);
}
const v16 = new F10(v7, v8);
const t15 = v16.constructor;
new t15(v16, v5);
gc();
