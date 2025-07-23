const v0 = `
    let v1 = 0;
    do {
        v1++;
    } while ((() => {
            const v4 = v1 < 10;
            this.constructor;
            return v4;
        })())
    /\u{12345}/myvis;
`;
eval(v0);
gc();
