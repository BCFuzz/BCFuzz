class C0 {
    constructor(a2, a3) {
        function F4(a6, a7) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = a6;
            const v10 = new Uint8Array(3129);
            for (const v11 in v10) {
            }
        }
        new F4();
        const v15 = new BigUint64Array(536870912);
        new F4(v15, 536870912);
        new F4(a3, a3);
    }
}
new C0();
new C0();
new C0();
gc();
