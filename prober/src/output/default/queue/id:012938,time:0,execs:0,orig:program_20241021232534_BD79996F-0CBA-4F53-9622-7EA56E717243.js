function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F1("undefined", F1, "undefined");
const v7 = `
    "undefined" in v6;
`;
eval(v7);
gc();
