for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    const v11 = /\u{12345}/myvis;
    const o19 = {
        n(a13, a14, a15) {
            const v16 = this;
            return v16.globalThis.escape(v11);
        },
    };
    const t10 = o19.n;
    t10();
    for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
    }
`;
eval(v10);
gc();
