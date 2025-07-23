class C0 {
}
class C1 {
    constructor(a3, a4, a5, a6) {
        for (let v7 = 0; v7 < 500; v7++) {
            for (let v8 = 0; v8 < 5; v8++) {
            }
            const v9 = C0.toString();
            const o10 = {
            };
            const v11 = o10.constructor;
            try { v11.create(v9); } catch (e) {}
        }
    }
}
new C1();
gc();
