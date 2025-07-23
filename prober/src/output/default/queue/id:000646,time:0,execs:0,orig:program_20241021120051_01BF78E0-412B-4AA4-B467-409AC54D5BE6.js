class C0 {
}
class C1 extends C0 {
    constructor(a3, a4) {
        super();
        delete C0[7];
    }
}
new C1();
gc();
