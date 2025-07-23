for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let v10 = 0; v10 < 5; v10++) {
    function F11(a13, a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        const o18 = {
            "maxByteLength": 268435439,
        };
        const v20 = new SharedArrayBuffer(1000, o18);
        const v22 = new Uint16Array(v20);
        v22.byteLength;
    }
    new F11();
}
gc();
