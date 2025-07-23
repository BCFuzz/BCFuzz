function f0() {
    return f0;
}
for (let i3 = -3, i4 = 10; i3 < i4; i4--) {
}
class C11 {
}
const v12 = new C11();
class C13 {
}
const v14 = new C13();
const v15 = new C13();
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    a18.constructor = f0;
    a18?.constructor;
}
const v23 = new F16(v15);
new F16(v14);
new F16(v12);
class C26 {
    constructor(a28, a29, a30, a31) {
        new a31(F16, a31, v23, F16);
        for (let v33 = 0; v33 < 5000; v33++) {
        }
    }
}
new C26(C26, C26, C26, C26);
gc();
