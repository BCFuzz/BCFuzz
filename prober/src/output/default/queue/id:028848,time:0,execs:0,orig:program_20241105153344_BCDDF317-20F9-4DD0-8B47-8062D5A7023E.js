for (let [i10, i11] = (() => {
        const v3 = new Uint8Array();
        const v6 = createGlobalObject().WebAssembly;
        v6.instantiate(v3);
        v6.instantiate(v3);
        v6.compile(v3);
        return [0, 10];
    })();
    i10 != i11;
    i11--) {
}
gc();
