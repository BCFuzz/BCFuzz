for (let [i18, i19] = (() => {
        const v1 = ("5")[5];
        const v3 = `
            (v1 / 1907240971) || 1907240971;
        `;
        const v8 = v3.split(v3[6]);
        v8.reverse();
        try { v8.flatMap(runString); } catch (e) {}
        const v15 = createGlobalObject().WebAssembly;
        const v16 = v15.instantiate(v15, 10, v3, v8);
        v16.then(v16, createGlobalObject);
        return [0, 10];
    })();
    (() => {
        const v20 = i18 != i19;
        return v20 && v20;
    })();
    i19--) {
}
gc();
