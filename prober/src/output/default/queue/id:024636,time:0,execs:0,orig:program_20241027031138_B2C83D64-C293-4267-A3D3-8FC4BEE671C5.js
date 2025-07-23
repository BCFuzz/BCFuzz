for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i13 = -3, i14 = 10; i14--, i13 < i14;) {
}
const v21 = `
    /\u{12345}/myvis;
    class C24 {
        [1.73109345780708e+308];
    }
`;
const v25 = v21.split(8);
const v26 = [2.0,-4.0];
function f27(a28, a29, a30) {
    return 8;
}
const v31 = f27(v25, 8, 8);
function F32(a34, a35, a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i40 = 0, i41 = 10; i40 < i41; i41--) {
    }
    try { a37.constructor(v25); } catch (e) {}
}
new F32(v26, f27, v31, F32);
gc();
