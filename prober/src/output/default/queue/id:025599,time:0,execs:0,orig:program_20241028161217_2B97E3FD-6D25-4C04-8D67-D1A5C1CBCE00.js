for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
const v11 = `
    const v14 = new Int8Array(255);
    for (const v15 in v14) {
        (112)[v15];
    }
`;
eval(v11);
gc();
