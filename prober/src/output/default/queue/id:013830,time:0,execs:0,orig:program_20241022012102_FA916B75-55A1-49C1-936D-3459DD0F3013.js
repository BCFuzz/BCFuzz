const v1 = -(-847857017);
const v2 = `
    for (let i3 = v1;
        (() => {
            for (let i6 = 0, i7 = 10; i7--, i6 & i6, i6 < i7;) {
            }
            return i3 < 4;
        })();
        ) {
    }
    /\u{12345}/myvis;
`;
eval(v2);
gc();
