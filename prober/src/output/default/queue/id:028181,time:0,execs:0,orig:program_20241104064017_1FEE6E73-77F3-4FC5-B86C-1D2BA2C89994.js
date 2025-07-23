class C0 {
    constructor(a2, a3) {
        for (let v4 = 0; v4 < 5; v4++) {
            function F5() {
                if (!new.target) { throw 'must be called with new'; }
                const v8 = new Uint32Array();
                const o11 = {
                    "maxByteLength": 16,
                };
                const v13 = new SharedArrayBuffer(1, o11);
                const v15 = new BigInt64Array(v13);
                const v16 = v15.sort();
                function f17(a18, a19) {
                    try { a19.constructor(F5, a18); } catch (e) {}
                    return a19.length;
                }
                v16.constructor = f17;
                const t17 = v16.constructor;
                t17(v8, v16);
            }
            new F5();
        }
        for (let i27 = -3, i28 = 10; i27 < i28; i28--) {
        }
    }
}
const v35 = new C0();
new C0(v35, C0);
new C0();
gc();
