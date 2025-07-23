for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v11 = `
    const v13 = ("e")[RegExp];
    for (let i17 = 0, i18 = 10;
        (() => {
            i18--;
            try {
                4 in v13;
            } catch(e21) {
            }
            return i17 < i18;
        })();
        ) {
    }
    /\u{12345}/myvis;
`;
eval(v11);
gc();
