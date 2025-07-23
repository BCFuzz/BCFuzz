for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function f10() {
    const v12 = ("").bold();
    const o21 = {
        n(a14, a15, a16) {
            const v17 = this;
            const v19 = v17.Intl.PluralRules;
            v19.type = v12;
            new v19(this, v19);
            return "";
        },
    };
    const v22 = o21.n;
    try { v22(); } catch (e) {}
    return v12;
}
const v26 = new BigInt64Array(129);
v26.filter(f10);
for (let i30 = 0, i31 = 10; i31--, i30 < i31;) {
}
gc();
