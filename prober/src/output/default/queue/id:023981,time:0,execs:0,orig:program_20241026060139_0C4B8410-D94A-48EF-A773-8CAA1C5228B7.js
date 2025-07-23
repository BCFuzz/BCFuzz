class C0 {
}
let v1 = 8;
const v2 = v1--;
const v3 = `
    class C4 {
    }
    C4(v2);
`;
const v6 = v3.split(v1);
const v7 = [2.0,-4.0];
function f8(a9, a10, a11) {
}
const v12 = f8(f8, f8, v2);
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    try { a18.constructor(v6); } catch (e) {}
}
new F13(v7, f8, v12, F13);
gc();
