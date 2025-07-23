for (let i2 = -3, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const v8 = `
            /\u{12345}/myvis;
            const v10 = \`
                Math.tanh();
                \\\`e${Math}g\\\`;
            \`;
        `;
        eval(v8);
    })()) {
}
gc();
