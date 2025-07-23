for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        const v8 = i4--;
        const v9 = `
            async function* f10(a11, a12) {
                a11 | (-13 >>> 1000.0);
                return -13;
            }
            f10(-13, i4);
        `;
        const v18 = eval(v9);
        v18.next(-13, v8, -13, i4, v18);
    })()) {
}
gc();
