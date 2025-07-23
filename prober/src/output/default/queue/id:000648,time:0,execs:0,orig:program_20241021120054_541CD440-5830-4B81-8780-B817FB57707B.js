const v1 = new Set();
class C2 extends Set {
    constructor(a4) {
        super(v1);
        this.__proto__ = v1;
        super.d = v1;
    }
}
new C2();
new C2();
class C7 {
}
class C8 {
}
new C8();
gc();
