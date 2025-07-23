function f9() {
    return -8.985024426039908e+307;
}
const v10 = f9();
class C11 extends f9 {
    constructor(a13, a14) {
        super();
        let v15 = ~v10;
        v15 >>>= v10;
    }
}
new C11();
gc();
