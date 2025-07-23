const v2 = new Uint32Array(85);
for (let i5 = 0, i6 = 10;
    (() => {
        i6--;
        const v8 = i5 < i6;
        const v11 = createGlobalObject().Atomics;
        v11.sub(v2, v11, v8);
        return v8;
    })();
    ) {
}
gc();
