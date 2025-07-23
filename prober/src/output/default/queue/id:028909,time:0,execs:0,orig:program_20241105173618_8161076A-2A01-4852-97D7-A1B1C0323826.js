for (let i2 = 10, i3 = 10; -13369 < i3; i3--) {
}
const v10 = `
    let v12 = eval();
    for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
    }
    v12 = eval;
    let v23 = 44485;
    for (; v23--;) {
    }
    -v12;
`;
eval(v10);
gc();
