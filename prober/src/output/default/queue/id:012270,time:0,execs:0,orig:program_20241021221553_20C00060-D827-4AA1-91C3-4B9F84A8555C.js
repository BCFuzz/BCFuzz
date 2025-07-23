for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    /\u{12345}/myvis;
    let v12 = 3247;
    for ((() => {
            for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
            }
        })();
        v12--;
        ) {
    }
`;
eval(v10);
gc();
