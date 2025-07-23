for (let v0 = 0; v0 < 5; v0++) {
    const v1 = `
        new Uint32Array(7);
    `;
    const v6 = eval(v1);
    for (let i9 = 0, i10 = 10;
        i9 < i10;
        (() => {
            const v14 = i10--;
            createGlobalObject().Atomics.and(v6, v0, v14);
            for (let i = 0; i < 5; i++) {
                for (let v19 = 0; v19 < 32; v19++) {
                }
            }
        })()) {
    }
}
gc();
