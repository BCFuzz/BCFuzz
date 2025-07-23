function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let [i17, i18] = (() => {
            for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
            }
            return [0, 10];
        })();
        (() => {
            i18--;
            const v20 = i17 < i18;
            const o23 = {
                "maxByteLength": 268435439,
            };
            const v25 = new SharedArrayBuffer(1000, o23);
            const v27 = new Uint32Array(v25);
            v27.byteLength;
            return v20;
        })();
        ) {
    }
}
new F0();
gc();
