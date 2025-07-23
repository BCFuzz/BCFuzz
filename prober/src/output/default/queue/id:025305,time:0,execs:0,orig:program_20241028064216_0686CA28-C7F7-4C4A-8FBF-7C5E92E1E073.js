const v1 = `
    /\u{12345}/myvis;
    class C3 extends -128 {
    }
`;
const v4 = v1.split();
const v5 = [2.0,-4.0];
function f6(a7, a8, a9) {
    return v1;
}
const v10 = f6();
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    try { a16.constructor(v4); } catch (e) {}
}
new F11(v5, f6, v10, F11);
gc();
