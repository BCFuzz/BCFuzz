const v3 = createGlobalObject().Float16Array;
for (let [i12, i13] = (() => {
        const v7 = new v3(150);
        try { v7.every(); } catch (e) {}
        v7[78] = v7;
        for (let v9 = 0; v9 < 25; v9++) {
            for (const v10 in v7) {
                v10 << -4294967297;
            }
        }
        return [0, 10];
    })();
    i13--, i12 < i13;
    ) {
}
gc();
