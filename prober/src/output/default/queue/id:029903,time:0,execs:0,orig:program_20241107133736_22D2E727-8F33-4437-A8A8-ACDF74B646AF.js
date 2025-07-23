const v0 = `
    function* f1(a2, a3, a4) {
        return f1;
    }
    const o7 = {
        next() {
            /\u{12345}/myvis;
            return f1;
        },
    };
`;
const v9 = `
    [1000000000.0,-2.0,-822.2701748699242,-5.0];
`;
const v11 = v9.replaceAll(8, v0);
for (let i14 = -3, i15 = 10; 8 < i15; i15--) {
}
const v22 = [2.0,-4.0];
function f23(a24, a25, a26) {
    return 8;
}
const v27 = f23(v22, f23, 8);
function F28(a30, a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    try { a33.constructor(v11); } catch (e) {}
}
new F28(v22, f23, v27, F28);
for (let i38 = 0, i39 = 1176; i39--, i38 < i39;) {
}
gc();
