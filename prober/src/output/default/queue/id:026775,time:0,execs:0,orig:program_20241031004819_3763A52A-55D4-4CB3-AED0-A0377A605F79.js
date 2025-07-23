const v1 = `
    let v2 = 0;
    v2++;
`;
const v4 = v1.repeat(8);
const v5 = [2.0,-4.0];
function f6(a7, a8, a9) {
    return a9;
}
const v10 = f6(f6, v4, v5);
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    try { a16.constructor(v4); } catch (e) {}
}
new F11(v5, f6, v10, F11);
gc();
