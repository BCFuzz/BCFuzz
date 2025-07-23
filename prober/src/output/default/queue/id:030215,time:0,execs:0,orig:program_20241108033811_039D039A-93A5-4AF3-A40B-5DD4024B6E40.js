for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        i4--;
        const v9 = `
            async function* f10(a11, a12) {
                const v14 = -13 >>> 1000.0;
                if ((v14 | v14) >= i4) {
                } else {
                }
                return f10;
            }
            f10();
        `;
        for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
            for (let i30 = 0, i31 = 10; i30 < i31; i31--) {
            }
        }
        eval(v9).next();
    })()) {
}
gc();
