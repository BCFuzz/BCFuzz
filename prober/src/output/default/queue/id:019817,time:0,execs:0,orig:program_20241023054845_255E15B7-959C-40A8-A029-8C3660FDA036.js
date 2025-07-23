function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
}
const v14 = `
    const v15 = /\u{12345}/myvis;
    const o24 = {
        n(a17, a18, a19) {
            const v20 = this;
            const t10 = v20.Intl.RelativeTimeFormat;
            const v23 = new t10();
            return v23;
        },
    };
    const t15 = o24.n;
    const v26 = t15(v14);
    try { v26.formatToParts(F0, v15); } catch (e) {}
    for (let i30 = 0, i31 = 10; i30 < i31; i31--) {
    }
`;
eval(v14);
gc();
