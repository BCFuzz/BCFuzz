const v0 = [-1,256];
class C1 {
    constructor(a3, a4, a5) {
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            const o12 = {
                "maxByteLength": 1953043059,
            };
            const v14 = new ArrayBuffer(7, o12);
            const v16 = new Uint8Array(v14, a3, v0);
            v16[3] = v16;
        }
        new F6();
    }
}
new C1();
gc();
