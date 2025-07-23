const o0 = {
};
const v2 = `
    const o9 = {
        toString(a4, a5) {
            return /\u{12345}/myvis;
        },
        set b(a8) {
        },
    };
`;
const v10 = v2.replaceAll(8, o0);
const v11 = [2.0,-4.0];
function f12(a13, a14, a15) {
    return a13;
}
const v16 = f12(v10, 8, o0);
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    try { a22.constructor(v10); } catch (e) {}
}
new F17(v11, f12, v16, F17);
for (let i27 = 0, i28 = 10; i27 < i28; i28--) {
}
gc();
