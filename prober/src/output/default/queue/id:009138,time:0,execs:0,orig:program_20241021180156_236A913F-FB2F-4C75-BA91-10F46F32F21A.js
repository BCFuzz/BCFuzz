class C1 extends Array {
    constructor(a3, a4) {
        super();
        for (let v5 = 0; v5 < 250; v5++) {
            const v8 = new Int16Array(this);
            const o9 = {
            };
            const v11 = new Proxy(v8, o9);
            v11[10] = 3826;
        }
    }
}
new C1(Array, Array);
gc();
