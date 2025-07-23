const v3 = createGlobalObject().Float16Array;
for (let i6 = 0, i7 = 10;
    (() => {
        const o10 = {
            "maxByteLength": 2147483648,
        };
        const v12 = new ArrayBuffer(512, o10);
        const v14 = new v3(v12);
        v14.toReversed(v14, o10, v3, v3);
        v14[[8]] = v3;
        i7--;
        const v18 = i6 < i7;
        for (let i20 = 0, i21 = 85; i21; i21--) {
        }
        return v18;
    })();
    ) {
}
gc();
