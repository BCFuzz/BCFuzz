function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5() {
    return 6;
}
F1.toString = f5;
for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
}
const v16 = `
    const v17 = /\u{12345}/myvis;
    const o26 = {
        n(a19, a20, a21) {
            const v22 = this;
            const t14 = v22.Intl.RelativeTimeFormat;
            const v25 = new t14();
            return v25;
        },
    };
    const v27 = o26.n;
    const v28 = v27(v27, f5, v27, F1, f5);
    try { v28.formatToParts(F1, v17); } catch (e) {}
    for (let i32 = 0, i33 = 10; i32 < i33; i33--) {
    }
`;
eval(v16);
gc();
