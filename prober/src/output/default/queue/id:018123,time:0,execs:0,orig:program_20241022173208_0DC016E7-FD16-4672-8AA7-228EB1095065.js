class C1 extends Array {
    constructor(a3, a4) {
        super();
        for (let v5 = 0; v5 < 50; v5++) {
            for (let v7 = 0; v7 < 100; v7++) {
            }
            const v8 = new Int16Array();
            const o9 = {
            };
            const v11 = new Proxy(v8, o9);
            v11.sticky = v11;
        }
    }
}
new C1(C1, C1);
gc();
