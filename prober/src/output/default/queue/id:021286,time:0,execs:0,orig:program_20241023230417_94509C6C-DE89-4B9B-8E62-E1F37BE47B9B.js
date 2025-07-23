class C0 {
}
const v1 = new C0();
class C2 {
}
const v3 = new C2();
const v4 = new C2();
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    a7.b = a7;
}
const v11 = new F5(v4);
new F5(v3);
new F5(v1);
class C14 {
    constructor(a16, a17, a18, a19) {
        new a19(F5, a19, v11, F5);
        for (let v21 = 0; v21 < 5000; v21++) {
        }
    }
}
new C14(C14, C14, C14, C14);
gc();
