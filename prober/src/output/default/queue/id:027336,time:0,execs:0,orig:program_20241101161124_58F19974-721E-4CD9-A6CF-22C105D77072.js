for (let i5 = -3, i6 = 10; i6--, i5 < i6;) {
}
const v13 = `
    class C15 extends RegExp {
        static #a = 2147483649;
    }
`;
const v16 = v13.split(8, 1.0);
const v17 = [2.0,-4.0];
function f18(a19, a20, a21) {
    return v16;
}
const v22 = f18();
function F23(a25, a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    try { a28.constructor(v16); } catch (e) {}
}
new F23(v17, f18, v22, F23);
gc();
