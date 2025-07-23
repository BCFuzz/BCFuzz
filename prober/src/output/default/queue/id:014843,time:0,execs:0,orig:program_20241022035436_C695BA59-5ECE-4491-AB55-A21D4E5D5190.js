for (let i2 = 10, i3 = 10; 1 < i3; i3--) {
}
const v10 = `
    const v11 = [1,1,1];
    const v12 = [v11,v11,v11,v11,v11];
    v12 != v12 ? v11 : v12;
`;
eval(v10);
gc();
