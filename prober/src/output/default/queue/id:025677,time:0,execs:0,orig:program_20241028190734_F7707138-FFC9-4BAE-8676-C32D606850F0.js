const v1 = `
    try {
    } catch(e2) {
        const v4 = new Uint8ClampedArray();
        v4.subarray(8, 8);
    }
`;
const v6 = v1.split(8);
const v7 = [2.0,-4.0];
function f8(a9, a10, a11) {
    return f8;
}
const v12 = f8(f8, 8, v1);
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    try { a18.constructor(v6); } catch (e) {}
}
new F13(v7, f8, v12, F13);
gc();
