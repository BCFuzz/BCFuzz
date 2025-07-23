class C0 {
    constructor(a2, a3, a4) {
        const v5 = this.constructor;
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            const o12 = {
                "maxByteLength": 1953043059,
            };
            const v14 = new ArrayBuffer(7, o12);
            const v16 = new Uint8Array(v14);
            v16[3] = v16;
        }
        new F6();
        try { new v5(); } catch (e) {}
    }
}
new C0();
gc();
