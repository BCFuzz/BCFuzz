function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4) {
        super();
        const t6 = createGlobalObject().Float16Array;
        const v8 = new t6(this);
        v8.subarray();
    }
}
const v10 = new C1(C1, f0);
new C1(C1, v10);
gc();
