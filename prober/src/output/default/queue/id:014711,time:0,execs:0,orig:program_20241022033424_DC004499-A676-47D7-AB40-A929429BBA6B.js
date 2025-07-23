for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const v10 = `
    Infinity && 536870887;
    for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
    }
`;
eval(v10);
gc();
