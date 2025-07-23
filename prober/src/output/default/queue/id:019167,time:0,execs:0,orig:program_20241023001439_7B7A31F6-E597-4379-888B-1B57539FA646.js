class C0 {
}
const v1 = new C0();
const v2 = v1.constructor;
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new F4(C0, v1, v1);
const v10 = v9.__defineSetter__;
let v11;
try { v11 = v10(F4, v10, v10); } catch (e) {}
v11 >= "p" ? v11 : "p";
v2 >= "p";
for (let i16 = 0; i16 < 6; i16++) {
}
gc();
