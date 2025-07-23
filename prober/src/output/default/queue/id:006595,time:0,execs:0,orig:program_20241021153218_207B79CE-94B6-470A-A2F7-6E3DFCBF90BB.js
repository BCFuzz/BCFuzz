class C0 {
}
const v1 = new C0();
for (let v2 = 0; v2 < 250; v2++) {
    const v3 = [v2];
    v3[Symbol.isConcatSpreadable] = v1;
    v3.concat();
}
gc();
