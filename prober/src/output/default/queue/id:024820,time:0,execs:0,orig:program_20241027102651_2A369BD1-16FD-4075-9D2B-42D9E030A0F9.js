let v0 = 8;
const v1 = v0--;
const v2 = `
    function f4(a5, a6) {
        return 257;
    }
`;
const v7 = v2.split(v0);
const v8 = [2.0,-4.0];
function f9(a10, a11, a12) {
    return a10;
}
const v13 = f9(f9, v1, f9);
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    try { a19.constructor(v7); } catch (e) {}
}
new F14(v8, f9, v13, F14);
gc();
