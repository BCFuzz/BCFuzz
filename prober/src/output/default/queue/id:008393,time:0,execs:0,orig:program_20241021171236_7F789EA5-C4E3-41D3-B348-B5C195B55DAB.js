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
            const v13 = new C10(a9, C10);
            const o14 = {
                __proto__: C10,
            };
            C10.b = v13;
            for (let v15 = 0; v15 < 50; v15++) {
            }
            return f0;
        }
        f8(f8);
        f8();
    }
}
const v18 = new C2();
new C2(f0, v18, C2, v18);
gc();
