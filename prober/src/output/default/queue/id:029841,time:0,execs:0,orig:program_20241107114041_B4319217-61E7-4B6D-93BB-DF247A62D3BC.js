for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10;
    i12 < i13;
    (() => {
        --i13;
        for (let [i39, i40] = (() => {
                for (let i20 = 0, i21 = 10000; i21--;) {
                }
                const v30 = new SharedArrayBuffer(56);
                const v32 = new BigInt64Array(v30);
                function f33() {
                    return -2n;
                }
                v32.toString = f33;
                createGlobalObject().Atomics.waitAsync(v32, i12, v32);
                return [i13, 10];
            })();
            i39 < i40;
            i40--) {
        }
    })()) {
}
gc();
