const v0 = `
    function f2(a3, a4, a5, a6) {
        const v7 = ("f").link(f2);
        for (let i10 = 0, i11 = 10; i11--, i10 < i11;) {
        }
        for (const v18 of v7) {
            v18.search(v7);
        }
        const o35 = {
            [a3](a21, a22, a23, a24) {
                /(?<=)\u{12345}/vs;
                for (let i28 = 0, i29 = 10; i28 < i29;) {
                }
            },
        };
        return v0;
    }
    f2(v0, v0, f2, f2);
`;
eval(v0);
gc();
