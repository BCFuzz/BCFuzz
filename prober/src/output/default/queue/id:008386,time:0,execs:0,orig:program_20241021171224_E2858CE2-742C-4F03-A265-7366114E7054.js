function f0(a1) {
    return a1;
}
class C2 extends f0 {
    constructor(a4, a5, a6, a7) {
        super();
        function f8(a9) {
            class C10 {
                static set b(a12) {
                }
            }
            const v13 = new C10();
            C10.b = v13;
            for (let v14 = 0; v14 < 5; v14++) {
                for (let i = 0; i < 5; i++) {
                }
            }
            return a9;
        }
        f8(a7);
        f8(C2);
    }
}
const v17 = new C2(f0, f0, C2, f0);
new C2(v17, v17, v17, f0);
gc();
