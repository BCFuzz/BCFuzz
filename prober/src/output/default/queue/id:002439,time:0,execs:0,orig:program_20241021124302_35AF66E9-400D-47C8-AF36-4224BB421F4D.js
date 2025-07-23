class C1 {
    get b() {
        let v2 = this;
        (v2++)[-1.7976931348623157e+308];
    }
}
new C1();
class C6 extends C1 {
    constructor(a8, a9) {
        super();
        super.b;
    }
}
new C6();
gc();
