for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const v8 = `
            async function* f9(a10, a11) {
                1000.0 === 1000.0 ? 1000.0 : 1000.0;
                return a11;
            }
            f9();
        `;
        eval(v8).next();
    })()) {
}
gc();
