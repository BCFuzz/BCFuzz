for (let i2 = 0, i3 = 10; i2 != i3; i3--) {
    for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
        const v20 = `
            async function* f21(a22, a23) {
                if (!((Uint8Array >>> Uint8Array) > 256)) {
                }
                return i2;
            }
            f21(i3, f21);
        `;
        for (let i32 = 0, i33 = 10; i32 < i33; i33--) {
        }
        const v40 = eval(v20);
        v40.next(i3, eval, v40, v20, i3);
    }
}
gc();
