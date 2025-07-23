const v2 = `
    const v5 = new Uint8Array(/\u{12345}/myvis, 8, 8);
    Array.d = v5;
`;
const v6 = v2.split(8);
const v7 = [2.0,-4.0];
function f8(a9, a10, a11) {
    return a10;
}
const v12 = f8();
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    try { a18.constructor(v6); } catch (e) {}
}
new F13(v7, f8, v12, F13);
gc();
