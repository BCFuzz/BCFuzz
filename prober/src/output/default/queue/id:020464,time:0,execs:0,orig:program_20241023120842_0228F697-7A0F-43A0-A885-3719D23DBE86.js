for (let i2 = -3, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const v8 = `
            for (let i11 = 0, i12 = 10;
                i11 + i11, i11 <= i12;
                (() => {
                    const v17 = i11++;
                    i11--;
                    ~v17;
                    i12--;
                })()) {
                i11 / i11;
            }
        `;
        eval(v8);
    })()) {
}
gc();
