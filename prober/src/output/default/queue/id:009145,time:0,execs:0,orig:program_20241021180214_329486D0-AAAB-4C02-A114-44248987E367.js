class C1 extends Array {
    constructor(a3, a4) {
        super();
        for (let v5 = 0; v5 < 100; v5++) {
            const v7 = new Int16Array();
            const o8 = {
            };
            const v10 = new Proxy(v7, o8);
            class C11 {
            }
            v10.sticky = v10;
        }
    }
}
new C1();
new C1(C1, Array);
gc();
