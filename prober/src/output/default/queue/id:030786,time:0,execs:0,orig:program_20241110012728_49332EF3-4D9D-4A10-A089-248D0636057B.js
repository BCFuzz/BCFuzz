for (let i3 = 0, i4 = 88957035; i4--, i3 < i4;) {
}
for (let [i33, i34] = (() => {
        for (let i13 = 0, i14 = 10; --i14, i13 < i14;) {
            for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
            }
        }
        return [0, 10];
    })();
    i34--, i33 < i34;
    ) {
}
const o43 = {
    "maxByteLength": 65537,
};
const v45 = new SharedArrayBuffer(1175, o43);
const v47 = new BigUint64Array(v45);
const v50 = createGlobalObject().Atomics;
v50.exchange(v47, v50, -9223372036854775808n);
gc();
