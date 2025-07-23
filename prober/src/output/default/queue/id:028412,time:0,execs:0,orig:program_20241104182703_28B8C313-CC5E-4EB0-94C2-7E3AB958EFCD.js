const v0 = `
    const v2 = /\u{12345}/myvis.source;
    function f3(a4) {
        return a4;
    }
    function f5(a6) {
        return v2;
    }
    f3.toString = f5;
    const o16 = {
        n(a9, a10, a11) {
            const v12 = this;
            const v14 = v12.Intl.Locale;
            v14.region = f3;
            try { new v14("split", v14); } catch (e) {}
            return f3;
        },
    };
    const v17 = o16.n;
    v17(v0, v17);
    for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
    }
`;
eval(v0);
gc();
