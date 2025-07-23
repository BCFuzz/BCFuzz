for (let [i19, i20] = (() => {
        let v1 = -4294967297;
        const v3 = `
            let v7 = -(++v1) >> "5";
            v7 ^= 3614;
        `;
        const v9 = v3.split(v3[6]);
        v9.reverse();
        try { v9.flatMap(runString); } catch (e) {}
        const v17 = createGlobalObject().WebAssembly.instantiate();
        v17.then(v17, createGlobalObject);
        return [0, 10];
    })();
    (() => {
        const v21 = i19 != i20;
        return v21 && v21;
    })();
    i20--) {
}
gc();
