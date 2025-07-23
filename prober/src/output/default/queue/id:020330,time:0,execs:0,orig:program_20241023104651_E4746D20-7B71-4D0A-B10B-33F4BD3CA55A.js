function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { v6(a3, a5); } catch (e) {}
}
const v8 = new F1(undefined, F1, F1);
const v9 = `
    let v11 = ("-13")[undefined];
    const t8 = v8.constructor;
    const v13 = new t8();
    const v14 = v13.constructor;
    v14.prototype = v14;
    new v14(v9);
    v11--;
`;
eval(v9);
gc();
