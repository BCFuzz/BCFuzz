for (let [i9, i10] = (() => {
        const v3 = new Uint8Array();
        const v6 = createGlobalObject().WebAssembly;
        v6.instantiate(v3);
        v6.compile(v3);
        return [0, 10];
    })();
    i9 != i10;
    i10--) {
}
gc();
