for (let i3 = -3, i4 = 10; i3 < i4; i4--) {
}
const v11 = `
    try { new Array(-1.24911862500535e+308); } catch (e) {}
`;
eval(v11);
gc();
