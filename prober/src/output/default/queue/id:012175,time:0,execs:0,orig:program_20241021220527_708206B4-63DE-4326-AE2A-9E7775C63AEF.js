const v1 = new BigInt64Array();
const v2 = `
    for (let i4 = 0;
        (() => {
            for (let [v5,...v6] of v1) {
                function f7() {
                    return f7;
                }
            }
            return i4 < 4;
        })();
        i4++) {
    }
    /\u{12345}/myvis;
`;
eval(v2);
gc();
