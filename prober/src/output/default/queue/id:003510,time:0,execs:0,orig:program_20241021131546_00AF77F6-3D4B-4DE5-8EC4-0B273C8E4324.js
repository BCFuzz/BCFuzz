class C0 {
    constructor(a2) {
        C0[C0] /= a2;
    }
}
const v3 = new C0(C0);
new C0(v3);
new C0(C0);
class C6 extends C0 {
}
new C6();
gc();
