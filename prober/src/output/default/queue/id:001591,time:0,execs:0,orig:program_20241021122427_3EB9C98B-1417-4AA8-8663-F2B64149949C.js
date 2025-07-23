class C2 {
    constructor(a4, a5, a6, a7) {
        function* f8(a9, a10, a11, a12) {
            return a10;
        }
        f8(a5, C2, C2, f8);
    }
}
const v14 = new C2();
const v15 = new C2();
new C2(v14, 1000000000000.0, v15, 54516n);
54516n == 1000000000000.0;
gc();
