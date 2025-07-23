const v1 = Date();
const v4 = `
    (48851)[8];
`;
const v6 = v4.split(8);
v6[1] = v1;
const v7 = [2.0,-4.0];
function f8(a9, a10, a11) {
    return v7;
}
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    try { a17.constructor(v6); } catch (e) {}
}
new F12(v7, f8, v4, F12);
gc();
