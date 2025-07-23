for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    const v13 = new Int8Array(255);
    for (const v14 in v13) {
        const v16 = new WeakMap();
        v16[v14];
    }
`;
eval(v10);
gc();
