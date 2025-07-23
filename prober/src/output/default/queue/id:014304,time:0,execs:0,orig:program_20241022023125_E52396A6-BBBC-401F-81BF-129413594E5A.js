const v2 = new FinalizationRegistry(Int8Array);
for (let i5 = 0, i6 = 10; i6--, i5 < i6;) {
}
const v13 = `
    let v14 = 0;
    let v15 = 64;
    ({"e":v15,...v14} = v2);
    while (v14 < 5) {
    }
`;
eval(v13);
gc();
