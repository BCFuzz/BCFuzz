const v0 = [];
class C2 extends BigInt64Array {
    constructor(a4, a5) {
        super();
        for (let v6 = 0; v6 < 50; v6++) {
        }
        for (let v7 = 0; v7 < 5; v7++) {
            try { a4(v7, ...v0); } catch (e) {}
        }
    }
}
const v9 = new C2();
const v10 = new C2(C2, v9);
new C2(v10, v10);
gc();
