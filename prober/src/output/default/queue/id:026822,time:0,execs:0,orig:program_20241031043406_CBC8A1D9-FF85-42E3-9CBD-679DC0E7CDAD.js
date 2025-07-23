const v0 = `
    const v1 = /\u{12345}/myvis;
    function f2(a3) {
        return a3;
    }
    const o13 = {
        n(a6, a7, a8) {
            const v9 = this;
            const v11 = v9.Intl.Locale;
            v11.region = f2;
            let v12;
            try { v12 = new v11("split", v11); } catch (e) {}
            return v12;
        },
    };
    const t15 = o13.n;
    t15(v1, o13, "split");
    for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
    }
`;
eval(v0);
for (let i30 = 0, i31 = 10; i30 < i31; i31--) {
}
for (let i40 = 0, i41 = 10; i40 < i41; i41--) {
}
gc();
