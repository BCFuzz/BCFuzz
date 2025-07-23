const v1 = `
    function f2(a3, a4, a5, a6) {
        return typeof 8;
    }
    /\u{12345}/myvis;
`;
const v9 = v1.split(8);
v9.reverse();
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
const v21 = [2.0,-4.0];
function f22(a23, a24, a25) {
    return a23;
}
const v26 = f22(v21, v9, v9);
function F27(a29, a30, a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i35 = 0, i36 = 10; i35 !== i36; i36--) {
    }
    try { a32.constructor(v9); } catch (e) {}
}
new F27(v21, f22, v26, F27);
gc();
