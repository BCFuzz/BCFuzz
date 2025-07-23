const v0 = `
    /\u{12345}/myvis;
    -Array(3898) ** 3898;
`;
const v7 = v0.split();
const v8 = [2.0,-4.0];
function f9(a10, a11, a12) {
    return v0;
}
const v13 = f9(v7, v0, v0);
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    try { a19.constructor(v7); } catch (e) {}
}
new F14(v8, f9, v13, F14);
gc();
