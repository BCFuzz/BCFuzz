for (let i2 = 10, i3 = 10; -13369 < i3; i3--) {
}
const v12 = Uint8Array.from(256);
const v13 = `
    const v14 = [v12,v12];
    for (const v15 in v12) {
        v15 in v14;
    }
`;
eval(v13);
gc();
