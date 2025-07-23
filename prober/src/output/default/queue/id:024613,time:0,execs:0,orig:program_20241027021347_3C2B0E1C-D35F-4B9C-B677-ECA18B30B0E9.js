function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new Int32Array(209);
    const v7 = [F0,F0,F0];
    function f8() {
        for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
            const o22 = {
                "maxByteLength": 255,
            };
            const o24 = {
            };
            const v25 = Uint8Array ^ o24;
            const v26 = new ArrayBuffer(255, o22);
            const v28 = new Int16Array(v26);
            v25 in v28;
        }
        return Int32Array;
    }
    const v31 = [f8];
    Reflect.apply(v7.toSorted, v6, v31);
}
new F0(F0, F0);
gc();
