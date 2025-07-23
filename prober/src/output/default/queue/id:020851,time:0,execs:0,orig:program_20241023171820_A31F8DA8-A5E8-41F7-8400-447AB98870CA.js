const v0 = [];
for (let [i19, i20] = (() => {
        const v3 = `
            function f4(a5, a6, a7) {
                for (let [v8,v9,v10] of v0) {
                }
                const v13 = new Uint32Array(1000);
                for (const v14 in v13) {
                    for (let v15 = 0; v15 < 5; v15++) {
                    }
                }
                return v13;
            }
            f4(0, 0, 0);
        `;
        eval(v3);
        return [0, 10];
    })();
    i19 != i20;
    i20--) {
}
gc();
