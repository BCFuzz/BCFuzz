for (let [i18, i19] = (() => {
        let v1 = -4294967297;
        const v3 = `
            -(++v1) >> "5";
        `;
        const v8 = v3.split(v3[6]);
        v8.reverse(v8, v3, v8);
        try { v8.flatMap(runString); } catch (e) {}
        const v16 = createGlobalObject().WebAssembly.instantiate();
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
