for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        i4--;
        const v9 = `
            async function* f10(a11, a12) {
                let v14 = -13 >>> 1000.0;
                const v15 = a11 | v14;
                v14 ^= v15;
                return v15;
            }
            f10(v9, f10);
        `;
        eval(v9).next();
    })()) {
}
gc();
