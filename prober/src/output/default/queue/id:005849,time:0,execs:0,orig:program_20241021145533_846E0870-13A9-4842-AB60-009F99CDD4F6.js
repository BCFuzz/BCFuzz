function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4, a5) {
        super();
        class C6 {
        }
        const v7 = new C6();
        ([4096]).concat(v7);
    }
}
new C1(f0, C1, C1);
new C1();
gc();
