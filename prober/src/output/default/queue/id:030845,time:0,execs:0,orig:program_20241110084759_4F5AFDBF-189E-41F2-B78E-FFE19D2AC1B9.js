for (let [i48, i49] = (() => {
        for (let i2 = 0, i3 = 1024; i2 < i3; i3--) {
        }
        for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
            for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
            }
        }
        let v31 = -4294967297;
        const v33 = `
            -(++v31) << "5";
        `;
        const v38 = v33.split(v33[6]);
        v38.reverse();
        try { v38.flatMap(runString); } catch (e) {}
        const v46 = createGlobalObject().WebAssembly.instantiate();
        v46.then(v46, createGlobalObject);
        return [0, 10];
    })();
    (() => {
        const v50 = i48 != i49;
        return v50 && v50;
    })();
    i49--) {
}
gc();
