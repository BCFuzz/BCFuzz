for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        i4--;
        const v9 = `
            async function* f10(a11, a12) {
                i3 + (-13 >>> 1000.0);
            }
            f10();
        `;
        for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
        }
        eval(v9).next();
    })()) {
}
gc();
