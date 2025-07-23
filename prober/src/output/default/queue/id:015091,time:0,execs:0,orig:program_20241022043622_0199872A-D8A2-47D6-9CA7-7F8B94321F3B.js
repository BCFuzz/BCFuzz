const v0 = [];
for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
const v11 = `
    for (let i14 = 0, i15 = 10;
        i14 < i15;
        (() => {
            [i14] = v0;
        })()) {
    }
`;
eval(v11);
gc();
