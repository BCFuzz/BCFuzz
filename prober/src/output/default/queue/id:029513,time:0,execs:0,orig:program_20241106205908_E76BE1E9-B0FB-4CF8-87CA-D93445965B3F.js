for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        i4--;
        const v9 = `
            async function* f10(a11, a12) {
                const v14 = -13 >>> 1000.0;
                Array();
                a11 - v14;
                return -13;
            }
            f10(-13);
        `;
        for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
        }
        const v30 = eval(v9);
        v30.next(v30);
    })()) {
}
gc();
