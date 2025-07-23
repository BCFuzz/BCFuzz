const v0 = `
    let v1 = 0;
    while ((() => {
            let v2 = 5;
            const v3 = ++v2;
            const t2 = [1142329350,4,-1,-57391,536870912];
            t2[Symbol.toStringTag] = v3;
            return v1 < v2;
        })()) {
        v1++;
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
