for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    ("c")[0];
    /\u{12345}/myvis;
`;
eval(v10);
gc();
