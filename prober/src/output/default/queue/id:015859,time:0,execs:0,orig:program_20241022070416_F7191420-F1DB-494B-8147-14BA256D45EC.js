function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F1();
v6.toString = Symbol;
const v7 = `
    const v9 = v6.toString().valueOf;
    try { v9(); } catch (e) {}
`;
eval(v7);
gc();
