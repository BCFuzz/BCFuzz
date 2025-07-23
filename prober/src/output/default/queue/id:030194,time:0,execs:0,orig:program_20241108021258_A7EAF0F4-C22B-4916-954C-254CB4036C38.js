for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
for (let [i34, i35] = (() => {
        const v15 = new SharedArrayBuffer(56);
        const v17 = new BigInt64Array(v15);
        function f18() {
            return -2n;
        }
        v17.toString = f18;
        for (let i22 = 0, i23 = 10; i23--, i22 < i23;) {
            createGlobalObject().Atomics.waitAsync(v17, i22, v17, -1000000000000.0);
        }
        return [0, 1024];
    })();
    (() => {
        for (let i38 = 0, i39 = 10; i38 < i39; i39--) {
        }
        return i35--;
    })();
    ) {
}
for (let i53 = 0, i54 = 10; i54--, i53 < i54;) {
}
gc();
