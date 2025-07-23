const v1 = [];
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
const v12 = `
    for (let i15 = 0, i16 = 10;
        i15 < 150;
        (() => {
            [i15] = v1;
        })()) {
    }
`;
eval(v12);
gc();
