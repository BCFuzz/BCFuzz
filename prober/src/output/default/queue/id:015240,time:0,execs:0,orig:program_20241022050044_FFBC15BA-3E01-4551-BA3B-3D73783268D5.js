for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    for (let v11 = 0; v11 < 5; v11++) {
        /\u{12345}/myvis;
        continue;
    }
`;
eval(v10);
gc();
