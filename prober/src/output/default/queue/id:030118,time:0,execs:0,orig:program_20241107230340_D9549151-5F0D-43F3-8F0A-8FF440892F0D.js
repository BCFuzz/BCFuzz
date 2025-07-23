class C1 {
}
const v3 = `
    [[C1,Array,createGlobalObject]];
`;
const v6 = v3.split();
for (const v8 of "toPrimitive") {
    const v9 = v8 + v6;
    const v11 = this.RegExp;
    try { v11(v9, v8); } catch (e) {}
}
for (let i15 = -3, i16 = 10; i15 < i16; i16--) {
}
for (let i25 = 0, i26 = 10; i25 < i26; i26--) {
}
gc();
