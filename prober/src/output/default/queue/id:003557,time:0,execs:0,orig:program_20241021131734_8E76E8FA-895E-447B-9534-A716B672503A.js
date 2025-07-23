class C1 {
}
const v2 = new C1();
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    v2.e -= undefined;
}
new F4();
class C11 {
}
class C12 extends C11 {
}
let v13 = new C12();
({"e":v13,} = v2);
const t14 = v13.constructor;
Symbol(t14()).description;
gc();
