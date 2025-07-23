for (let v0 = 0; v0 < 5; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        const v4 = new Uint32Array(v0, v0, v0);
        const o7 = {
            "maxByteLength": 16,
        };
        const v9 = new SharedArrayBuffer(1, o7);
        const v11 = new BigInt64Array(v9);
        const v12 = v11.sort();
        function f13(a14, a15) {
            a15.length;
            return F1;
        }
        v12.constructor = f13;
        const t15 = v12.constructor;
        t15(v4, v12);
    }
    new F1();
}
for (let i22 = -3, i23 = 10; i22 < i23; i23--) {
}
gc();
