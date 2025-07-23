const v1 = `
    Object.defineProperty(/a\nW/vgi, "unicode", { configurable: true, enumerable: true, value: 4 });
    /\u{12345}/myvis;
`;
const v4 = v1.split();
const v5 = [2.0,-4.0];
function f6(a7, a8, a9) {
    return a9;
}
const v10 = f6(v1, v4, 4);
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    try { a16.constructor(v4); } catch (e) {}
}
new F11(v5, f6, v10, F11);
gc();
