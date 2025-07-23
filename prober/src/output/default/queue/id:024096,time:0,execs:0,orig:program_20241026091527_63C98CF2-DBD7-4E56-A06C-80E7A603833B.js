const v1 = `
    Object.defineProperty(/a\nW/vgi, "unicode", { configurable: true, enumerable: true, value: -2147483649 });
    /\u{12345}/myvis;
`;
const v5 = v1.split(8);
const v6 = v5.reverse(v5, v5, v1, 8);
const v7 = [2.0,-4.0];
function f8(a9, a10, a11) {
    return v6;
}
const v12 = f8(v7, 8, v6);
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    try { a18.constructor(v5); } catch (e) {}
}
new F13(v7, f8, v12, F13);
gc();
