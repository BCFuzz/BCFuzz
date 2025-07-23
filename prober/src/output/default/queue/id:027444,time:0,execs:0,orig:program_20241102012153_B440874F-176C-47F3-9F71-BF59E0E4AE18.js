for (let i4 = -3, i5 = 10; i5--, i4 < i5;) {
}
const v12 = `
    for (let v13 = 0; v13 < 5; v13++) {
    }
    /\u{12345}/myvis;
`;
const v15 = v12.split(8, 1.0);
const v16 = [2.0,-4.0];
function f17(a18, a19, a20) {
}
const v21 = f17();
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    try { a27.constructor(v15); } catch (e) {}
}
new F22(v16, f17, v21, F22);
gc();
