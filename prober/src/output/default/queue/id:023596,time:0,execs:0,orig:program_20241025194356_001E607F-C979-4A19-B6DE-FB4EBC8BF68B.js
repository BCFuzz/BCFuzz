const v1 = `
    async function f2(a3, a4, a5) {
        return a5;
    }
    /\u{12345}/myvis;
`;
const v7 = v1.split(3);
const v8 = [2.0,-4.0];
function f9(a10, a11, a12) {
    return v7;
}
const v13 = f9();
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    try { a19.constructor(v7); } catch (e) {}
}
new F14(v8, f9, v13, F14);
gc();
