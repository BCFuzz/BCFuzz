class C1 extends Array {
    constructor(a3, a4) {
        super();
        for (let v5 = 0; v5 < 25; v5++) {
            const v8 = new Int16Array(v5, a4, v5);
            for (let v9 = 0; v9 < 250; v9++) {
            }
            const o10 = {
            };
            const v12 = new Proxy(v8, o10);
            v12[10] = 3826;
        }
        for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
        }
    }
}
new C1();
gc();
