for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        i4--;
        const v9 = `
            async function* f10(a11, a12) {
                const v14 = -13 >>> 1000.0;
                Array();
                const v17 = a11 - v14;
                v17 - v17;
                return -13;
            }
            f10(-13);
        `;
        for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
        }
        eval(v9).next();
    })()) {
}
gc();
