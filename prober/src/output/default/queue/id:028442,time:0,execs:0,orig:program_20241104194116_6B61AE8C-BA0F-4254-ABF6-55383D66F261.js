for (let i2 = 0, i3 = 10; i2 != i3; i3--) {
    for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
        const v20 = `
            async function* f21(a22, a23) {
                if ((Uint8Array >>> Uint8Array) > 268435439) {
                }
                return i3;
            }
            f21(f21, i3);
        `;
        for (let i32 = 0, i33 = 10; i32 < i33; i33--) {
        }
        eval(v20).next();
    }
}
gc();
