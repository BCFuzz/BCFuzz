let v1 = 10;
v1--;
const v3 = `
    const o8 = {
        toString(a5, a6) {
            /\u{12345}/myvis;
            return a6;
        },
    };
`;
(v1 + v3.split()).replaceAll(v3, Date);
for (let i14 = 0, i15 = 10; i15--, i14 < i15;) {
}
for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
}
gc();
