for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
for (let [i38, i39] = (() => {
        let v21 = -4294967297;
        const v23 = `
            -(--v21) && "5";
        `;
        const v28 = v23.split(v23[6]);
        v28.reverse();
        try { v28.flatMap(runString); } catch (e) {}
        const v36 = createGlobalObject().WebAssembly.instantiate();
        v36.then(v36, createGlobalObject);
        return [0, 10];
    })();
    (() => {
        const v40 = i38 != i39;
        return v40 && v40;
    })();
    i39--) {
}
gc();
