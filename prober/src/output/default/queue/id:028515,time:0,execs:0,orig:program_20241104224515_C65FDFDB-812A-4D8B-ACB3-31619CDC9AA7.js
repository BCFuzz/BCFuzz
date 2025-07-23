for (let i2 = 0, i3 = 10; i2 != i3; i3--) {
    for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
        const v20 = `
            async function* f21(a22, a23) {
                const v27 = (Uint8Array >>> Uint8Array) > 268435439;
                if (v27) {
                    [Reflect,v27];
                }
                return v27;
            }
            f21(i2, i12);
        `;
        for (let i34 = 0, i35 = 10; i34 < i35; i35--) {
        }
        eval(v20).next();
    }
}
gc();
