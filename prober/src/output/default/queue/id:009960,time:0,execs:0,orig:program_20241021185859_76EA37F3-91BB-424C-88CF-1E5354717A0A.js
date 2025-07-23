function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0(F0, F0, F0);
const v6 = `
    /\xf0\x9f\x92\xa9+/yis;
    let v9;
    try { v9 = Reflect.apply(v5, v5, v5); } catch (e) {}
    v9 in v5;
`;
eval(v6);
gc();
