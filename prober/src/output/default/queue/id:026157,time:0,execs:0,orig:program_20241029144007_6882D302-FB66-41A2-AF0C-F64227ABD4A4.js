for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
for (let i13 = -3, i14 = 10; i14--;) {
}
const v20 = `
    /\u{12345}/myvis;
    class C23 {
        [1.73109345780708e+308];
    }
`;
const v24 = v20.split(1);
function f25(a26, a27, a28) {
    return a27;
}
const v29 = f25();
function F30(a32, a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    try { a35.constructor(v24); } catch (e) {}
}
new F30(v24, f25, v29, F30);
gc();
