for (let i5 = -3, i6 = 10; i6--, i5 < i6;) {
}
const v13 = `
    /\u{12345}/myvis;
    class C16 extends RegExp {
        static #a = 2147483649;
    }
`;
const v17 = v13.split(8, 1.0);
const v18 = [2.0,-4.0];
function f19(a20, a21, a22) {
    return a21;
}
const v23 = f19(v17, v17, v18);
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    try { a29.constructor(v17); } catch (e) {}
}
new F24(v18, f19, v23, F24);
gc();
