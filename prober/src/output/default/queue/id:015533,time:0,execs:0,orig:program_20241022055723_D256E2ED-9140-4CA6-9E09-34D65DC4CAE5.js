function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
const v5 = `
    {
        let v6 = v4 & v4;
        v6--;
    }
    /\u{12345}/myvis;
`;
eval(v5);
gc();
