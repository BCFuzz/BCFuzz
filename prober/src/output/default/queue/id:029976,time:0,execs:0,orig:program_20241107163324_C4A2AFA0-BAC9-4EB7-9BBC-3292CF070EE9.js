const v0 = `
    const v1 = [-1418288338,1890054263,64122,-4294967296,7,-63644,1094129896,48202,367263938,24122];
    const o6 = {
        toString(a3, a4) {
            /\u{12345}/myvis;
            return v1;
        },
    };
`;
const v7 = v0.split();
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
for (let i20 = 0, i21 = 10; i20 != i21; i21--) {
}
for (const v29 of "toPrimitive") {
    const v30 = v29 + v7;
    const v32 = this.RegExp;
    try { v32(v30, v29); } catch (e) {}
}
for (let i36 = 0, i37 = 65537; i37--;) {
}
gc();
