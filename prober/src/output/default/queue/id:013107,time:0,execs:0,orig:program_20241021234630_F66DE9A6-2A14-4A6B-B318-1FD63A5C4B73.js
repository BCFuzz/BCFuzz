function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4, a5, a6) {
        super();
        const v7 = /\ud808\udf45*/mdgi;
        class C8 {
            constructor(a10) {
                for (let i12 = 0; i12 < 13057; ++i12) {
                    super.b = v7;
                }
            }
        }
        new C8();
    }
}
const v19 = new C1(C1, f0, f0, f0);
new C1(f0, C1, C1, v19);
gc();
