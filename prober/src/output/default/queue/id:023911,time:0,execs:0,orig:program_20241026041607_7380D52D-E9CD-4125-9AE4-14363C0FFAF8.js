const v2 = `
    ("268435456")[8];
    /\u{12345}/myvis;
`;
const v5 = v2.split(8);
v5.shift();
const v7 = [2.0,-4.0];
function f8(a9, a10, a11) {
    return a11;
}
const v12 = f8("268435456", v2, v5);
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    try { a18.constructor(v5); } catch (e) {}
}
new F13(v7, f8, v12, F13);
gc();
