const v2 = Array();
const v4 = `
    let v5 = 436872.5824562777;
    [v5] = v2;
`;
const v6 = v4.split(8);
const v7 = [2.0,-4.0];
function f8(a9, a10, a11) {
    return v6;
}
const v12 = f8();
v12.copyWithin(true);
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    try { a19.constructor(v6); } catch (e) {}
}
new F14(v7, f8, v12, F14);
gc();
