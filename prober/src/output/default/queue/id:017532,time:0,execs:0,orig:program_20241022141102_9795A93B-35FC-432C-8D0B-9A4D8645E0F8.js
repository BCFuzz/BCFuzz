const v3 = createGlobalObject().Float16Array;
for (let i6 = 0, i7 = 10;
    (() => {
        const o10 = {
            "maxByteLength": 2147483648,
        };
        const v12 = new ArrayBuffer(512, o10);
        const v14 = new v3(v12);
        v14[[8]] = v3;
        i7--;
        const v17 = i6 < i7;
        for (let i19 = 0, i20 = 85; i20; i20--) {
        }
        return v17;
    })();
    ) {
}
gc();
