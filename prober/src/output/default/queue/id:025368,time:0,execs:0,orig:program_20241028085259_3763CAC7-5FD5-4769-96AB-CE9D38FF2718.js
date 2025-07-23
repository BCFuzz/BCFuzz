const v0 = `
    /[ta[a-z]]/mgiu;
`;
const v2 = v0.split();
const v3 = [2.0,-4.0];
function f4(a5, a6, a7) {
    return a5;
}
const v8 = f4(v3, v3, v3);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    try { a14.constructor(v2); } catch (e) {}
}
new F9(v3, f4, v8, F9);
gc();
