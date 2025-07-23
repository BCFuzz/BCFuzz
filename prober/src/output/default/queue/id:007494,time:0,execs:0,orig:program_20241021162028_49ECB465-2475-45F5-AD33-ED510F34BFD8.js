function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i = 0; i < 5; i++) {
        const o7 = {
            "maxByteLength": 5,
        };
        const v9 = new ArrayBuffer(5, o7);
        const v11 = new Int32Array(v9);
        function f12() {
            v11.byteLength;
        }
        v11[Symbol.toPrimitive] = f12;
        v11[0] = v11;
    }
}
new F0();
new F0();
gc();
