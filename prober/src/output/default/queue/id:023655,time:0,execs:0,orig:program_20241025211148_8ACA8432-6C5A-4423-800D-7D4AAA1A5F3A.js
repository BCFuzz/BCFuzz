for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    for (let v11 = 0; v11 < 5; v11++) {
        const t4 = createGlobalObject().Float16Array;
        const v15 = new t4();
        for (const v16 of v15) {
        }
    }
    for (let i19 = 0, i20 = 10; i19 !== i20; i20--) {
    }
    for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
    }
`;
eval(v10);
gc();
