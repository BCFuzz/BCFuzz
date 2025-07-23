for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let [i33, i34] = (() => {
        const v14 = new SharedArrayBuffer(56);
        const v16 = new BigInt64Array(v14);
        function f17() {
            return -2n;
        }
        v16.toString = f17;
        for (let i21 = 0, i22 = 10; i22--, i21 < i22;) {
            createGlobalObject().Atomics.waitAsync(v16, i21, v16);
        }
        return [0, 1024];
    })();
    i34--;
    ) {
}
gc();
