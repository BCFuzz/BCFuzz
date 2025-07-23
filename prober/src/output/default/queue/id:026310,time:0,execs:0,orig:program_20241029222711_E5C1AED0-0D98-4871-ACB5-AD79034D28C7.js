const o0 = {
};
const v2 = `
    class C3 {
        static {
            [1000000000.0,-2.0,-822.2701748699242,-5.0];
        }
    }
    /\u{12345}/myvis;
`;
const v7 = v2.replaceAll(8, o0);
for (let [i20, i21] = (() => {
        for (let i11 = -3, i12 = 10; i11 < i12; i12--) {
        }
        return [0, 10];
    })();
    i20 < i21;
    i21--) {
}
const v28 = [2.0,-4.0];
function f29(a30, a31, a32) {
    return a30;
}
const v33 = f29(8, v7, v28);
function F34(a36, a37, a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    try { a39.constructor(v7); } catch (e) {}
}
new F34(v28, f29, v33, F34);
gc();
