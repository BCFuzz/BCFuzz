const v1 = `
    class C4 extends Map {
        #d = 36457n;
    }
    /\u{12345}/myvis;
`;
const v6 = v1.split(3);
const v7 = [2.0,-4.0];
function f8(a9, a10, a11) {
    return a11;
}
const v12 = f8();
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    try { a18.constructor(v6); } catch (e) {}
}
new F13(v7, f8, v12, F13);
gc();
