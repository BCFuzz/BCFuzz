for (let i2 = -3, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const v8 = `
            /\u{12345}/myvis;
            var arguments = Symbol;
        `;
        eval(v8);
    })()) {
}
gc();
