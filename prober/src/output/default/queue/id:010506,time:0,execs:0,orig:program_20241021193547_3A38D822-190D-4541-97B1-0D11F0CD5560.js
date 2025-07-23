const v0 = `
    let v1 = 0;
    while ((() => {
            ~-9;
            const v5 = v1 < 5;
            class C6 {
            }
            return v5;
        })()) {
        v1++;
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
