for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        i4--;
        const v9 = `
            async function* f10(a11, a12) {
                a11 * (-13 >>> 1000.0);
                return i3;
            }
            f10();
        `;
        eval(v9).next();
    })()) {
}
gc();
