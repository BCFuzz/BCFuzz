const v2 = `
    for (let v3 = 0; v3 < 5; v3++) {
        ("268435456")[8];
    }
    /\u{12345}/myvis;
`;
const v6 = v2.split(8);
v6[1] = v6;
const v7 = [2.0,-4.0];
function f8(a9, a10, a11) {
    return v2;
}
const v12 = f8(v6, 8, 8);
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    try { a18.constructor(v6); } catch (e) {}
}
new F13(v7, f8, v12, F13);
gc();
