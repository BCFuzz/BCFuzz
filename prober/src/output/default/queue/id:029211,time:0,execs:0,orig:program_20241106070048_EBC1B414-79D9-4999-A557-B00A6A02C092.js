for (let i2 = 0, i3 = 10;
    (() => {
        new SharedArrayBuffer(2147483648);
        return i2 < i3;
    })();
    (() => {
        for (let [i19, i20] = (() => {
                const v13 = new Uint8Array(10, 0, i3);
                const v16 = createGlobalObject().WebAssembly;
                v16.instantiate(v13);
                v16.instantiate(v13);
                return [0, 10];
            })();
            i19 != i20;
            i20--) {
        }
        i3--;
    })()) {
}
gc();
