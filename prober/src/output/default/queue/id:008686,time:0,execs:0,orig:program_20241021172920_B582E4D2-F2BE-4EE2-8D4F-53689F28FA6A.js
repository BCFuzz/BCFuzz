function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4, a5) {
        super();
        function f6(a7, a8, a9, a10) {
            Math.ceil(a4);
            ++a4;
            for (let v14 = 0; v14 < 50; v14++) {
            }
            return a8;
        }
        f6(f6, this, a5, f6);
        f6();
    }
}
new C1(f0, f0);
new C1();
gc();
