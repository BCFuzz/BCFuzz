const v0 = `
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        let [v5] = a4;
    }
    /\u{12345}/myvis;
`;
eval(v0);
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
gc();
