function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a2;
}
for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
}
const v15 = `
    const v16 = new F0(112, 112);
    for (const v17 in v16) {
        (112)[v17];
    }
`;
eval(v15);
gc();
