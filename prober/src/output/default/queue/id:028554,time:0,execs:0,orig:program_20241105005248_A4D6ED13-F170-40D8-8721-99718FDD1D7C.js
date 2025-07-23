const v2 = Array(Array);
const v4 = `
    let v5 = 436872.5824562777;
    /\u{12345}/myvis;
    [v5] = v2;
`;
const v7 = v4.split(8);
const v8 = [2.0,-4.0];
function f9(a10, a11, a12) {
    return v7;
}
const v13 = f9(v8, v8, 8);
v13.copyWithin(true);
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    try { a20.constructor(v7); } catch (e) {}
}
new F15(v8, f9, v13, F15);
gc();
