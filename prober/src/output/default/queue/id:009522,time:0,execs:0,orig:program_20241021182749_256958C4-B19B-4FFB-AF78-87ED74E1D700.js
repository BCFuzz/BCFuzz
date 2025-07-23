const v0 = `
    257 !== 257;
    const v3 = [257,257,257,257];
    const v7 = new Float32Array(v3, v3.entries()?.next, 257);
    v7?.forEach;
    let v9 = 0;
    while ((() => {
            let v11 = ~5;
            v11--;
            return v9 < 5;
        })()) {
        v9++;
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
