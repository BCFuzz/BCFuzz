for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    const v11 = /\u{12345}/myvis;
    function f12(a13, a14) {
        return v10;
    }
    v11.toString = f12;
    const o22 = {
        n(a16, a17, a18) {
            const v19 = this;
            v19.globalThis.escape(v11);
            return a18;
        },
    };
    const t15 = o22.n;
    t15();
    for (let i27 = 0, i28 = 10; i27 < i28; i28--) {
    }
`;
eval(v10);
gc();
