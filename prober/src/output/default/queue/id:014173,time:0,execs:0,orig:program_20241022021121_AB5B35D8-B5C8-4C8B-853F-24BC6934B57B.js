const o26 = {
    get d() {
        for (let v1 = 0; v1 < 100; v1++) {
            function f2(a3, a4, a5) {
                [65536,6,7,-27189,1342510719,47532,1073741825,268435456,1094569900,-65536];
                for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
                }
                const o20 = {
                    "maxByteLength": 8,
                };
                const v22 = new SharedArrayBuffer(5, o20);
                const v24 = new Uint32Array(v22);
                v24.byteOffset >>>= -14;
                return v1;
            }
            f2(v1, this, f2);
        }
        return this;
    },
};
const o27 = {
    ...o26,
};
gc();
