const v0 = `
    /\u{12345}/myvis;
    for (let i4 = 0, i5 = 10;
        (() => {
            i5--;
            try {
            } catch(e7) {
                function f8() {
                    return v0;
                }
            }
            return i4 < i5;
        })();
        ) {
    }
`;
eval(v0);
gc();
