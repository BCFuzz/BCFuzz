for (let [i15, i16] = (() => {
        const v2 = `
            const o3 = {
            };
            o3[15] >>>= -1000000000.0;
        `;
        const v4 = v2[6];
        const v5 = v2.split(v4);
        const v6 = v5.reverse(v2, -1000000000.0, v5);
        try { v5.flatMap(runString); } catch (e) {}
        const v13 = createGlobalObject().WebAssembly.instantiate(v6, v6, -1000000000.0, v4);
        v13.then(v13, createGlobalObject);
        return [0, 10];
    })();
    (() => {
        const v17 = i15 != i16;
        return v17 * v17;
    })();
    i16--) {
}
gc();
