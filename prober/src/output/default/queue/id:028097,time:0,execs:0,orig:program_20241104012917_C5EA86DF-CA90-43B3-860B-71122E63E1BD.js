class C1 {
    constructor(a3, a4, a5, a6) {
        for (let v7 = 0; v7 < 100; v7++) {
            const o8 = {
            };
            const v9 = o8.constructor;
            try { v9.create(a3); } catch (e) {}
        }
    }
}
const v11 = new C1(null, null, C1, C1);
const t11 = v11.constructor;
new t11(null);
gc();
