function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4, a5) {
        super();
        function f6(a7, a8, a9, a10) {
            class C12 extends Date {
            }
            const v13 = new C12();
            const v15 = new WeakSet();
            const v16 = v15.has(v13);
            for (let v17 = 0; v17 < 50; v17++) {
            }
            return v16;
        }
        f6(C1, f6(), C1, f0);
    }
}
new C1(f0, f0, C1);
new C1();
gc();
