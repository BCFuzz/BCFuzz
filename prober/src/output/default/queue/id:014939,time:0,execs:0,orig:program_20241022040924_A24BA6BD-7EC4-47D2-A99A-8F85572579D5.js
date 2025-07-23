class C0 {
    #m(a2) {
    }
}
const v3 = new C0();
new C0();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    class C9 extends C0 {
    }
    new C9();
    new C9();
}
new F5();
new F5(v3, C0);
for (let v14 = 0; v14 < 250; v14++) {
}
gc();
