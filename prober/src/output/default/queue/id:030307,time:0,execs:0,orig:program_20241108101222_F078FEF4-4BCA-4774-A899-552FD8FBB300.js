for (let i3 = 0, i4 = 10 + 10; i4--, i4;) {
}
const v10 = `
    const o15 = {
        toString(a12, a13) {
            /\u{12345}/myvis;
            return this;
        },
    };
`;
let v16 = v10.split();
for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
}
for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
}
for (const v38 of "toPrimitive") {
    const v39 = v38 + v16;
    const v41 = this.RegExp;
    try { v41(v39, v38); } catch (e) {}
    v16 = v41(v39);
}
for (let i46 = 0, i47 = 65537; i47--;) {
}
gc();
