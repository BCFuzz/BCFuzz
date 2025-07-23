const v2 = `
    [1000000000.0,-2.0,-822.2701748699242,-5.0];
    /\u{12345}/myvis;
`;
const v5 = v2.replaceAll(8, "__proto__");
for (let i7 = 10, i8 = 10; 8 < i8; i8--) {
}
const v15 = [2.0,-4.0];
function f16(a17, a18, a19) {
    return v5;
}
const v20 = f16(v5, "__proto__", v5);
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    try { a26.constructor(v5); } catch (e) {}
}
new F21(v15, f16, v20, F21);
gc();
