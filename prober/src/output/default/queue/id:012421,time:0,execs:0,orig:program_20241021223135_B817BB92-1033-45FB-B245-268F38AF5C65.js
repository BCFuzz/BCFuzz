const v0 = `
    for (let i2 = 0;
        i2 < 1;
        (() => {
            i2++;
            for (let [v8,v9,,v10] of "-1073741824") {
            }
        })()) {
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
