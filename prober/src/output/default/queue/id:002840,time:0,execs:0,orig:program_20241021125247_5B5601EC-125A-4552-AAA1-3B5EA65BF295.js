class C1 extends Int8Array {
    #e;
    constructor(a3, a4) {
        super();
        for (let v5 = 0; v5 < 50; v5++) {
        }
    }
}
const v6 = new C1(C1, Int8Array);
const v7 = new C1(v6, v6);
new C1(v7, C1);
gc();
