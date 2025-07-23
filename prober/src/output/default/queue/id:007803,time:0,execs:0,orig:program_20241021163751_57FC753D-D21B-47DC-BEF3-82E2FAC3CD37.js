for (let i2 = -3, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    const v11 = [v10,v10];
    const v12 = [v11];
    v11 != v12 ? v11 : v12;
`;
eval(v10);
gc();
