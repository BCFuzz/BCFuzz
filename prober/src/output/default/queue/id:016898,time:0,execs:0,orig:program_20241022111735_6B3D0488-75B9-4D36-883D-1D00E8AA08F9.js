for (let i2 = -3, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const v8 = `
            \`e${i3}g\`;
        `;
        eval(v8);
    })()) {
}
gc();
