for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
    for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
    }
}
for (let i23 = 0, i24 = 10 | 10; i24--, i24;) {
    for (let i33 = 0, i34 = 10 + 10;
        i34--, i34;
        (() => {
            for (let i40 = 0, i41 = 10; i40 < i41; i41--) {
            }
        })()) {
    }
}
const v50 = `
    ["toString",[v50,[v50,v50,v50,v50,v50]]];
    const o59 = {
        toString(a56, a57) {
            /\u{12345}/myvis;
            return "toString";
        },
    };
`;
const v60 = v50.split();
for (let i63 = 0, i64 = 10; i63 < i64; i64--) {
}
for (let i73 = 0, i74 = 10; i73 < i74; i74--) {
}
for (const v82 of "toPrimitive") {
    const v83 = v82 + v60;
    const v85 = this.RegExp;
    try { v85(v83, v82); } catch (e) {}
}
for (let i89 = 0, i90 = 59935; i90--;) {
}
gc();
