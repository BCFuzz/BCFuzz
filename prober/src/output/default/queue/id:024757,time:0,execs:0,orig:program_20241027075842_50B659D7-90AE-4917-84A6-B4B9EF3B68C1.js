for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i13 = -3, i14 = 10; i14--, i13 < i14;) {
}
const v21 = `
    class C23 {
        [1.73109345780708e+308];
    }
`;
const v24 = v21.split(8);
const v25 = [2.0,-4.0];
function f26(a27, a28, a29) {
    return v24;
}
const v30 = f26();
function F31(a33, a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
    }
    try { a36.constructor(v24); } catch (e) {}
}
new F31(v25, f26, v30, F31);
gc();
