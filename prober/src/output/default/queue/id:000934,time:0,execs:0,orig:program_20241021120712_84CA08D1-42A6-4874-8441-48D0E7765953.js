function f0() {
    return f0;
}
class C1 extends f0 {
}
class C2 extends C1 {
    constructor(a4, a5, a6, a7) {
        super();
        new SharedArrayBuffer(C1);
    }
}
new C2();
gc();
