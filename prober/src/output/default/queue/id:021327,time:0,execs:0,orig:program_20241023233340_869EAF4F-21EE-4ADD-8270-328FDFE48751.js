function f0() {
    return f0;
}
class C1 {
    constructor(a3, a4) {
        for (let v5 = 0; v5 < 5; v5++) {
            const v6 = f0.toString(v5, this, f0, C1, f0);
            const o7 = {
            };
            const v8 = o7.constructor;
            try { v8.create(v6); } catch (e) {}
        }
        for (let v10 = 0; v10 < 250; v10++) {
        }
    }
}
new C1(C1, f0);
gc();
