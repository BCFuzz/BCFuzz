class C2 extends Date {
}
class C3 extends C2 {
    constructor(a5, a6, a7) {
        super();
        super.setUTCFullYear(3);
        Date.parse(a6);
    }
}
const v10 = new C3(C2, Date, 3);
new C3(v10, v10);
gc();
