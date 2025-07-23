for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    async function* f11(a12, a13) {
        return a12;
    }
    f11(f11, f11);
`;
const v16 = eval(v10);
for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
    for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
    }
}
Array.fromAsync(v16);
gc();
