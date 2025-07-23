for (let i2 = -3, i3 = 10; i3--, i2 < i3;) {
}
const v10 = `
    class C12 extends /a\WN[^v0(?: foo )]/myvis {
    }
`;
const v13 = v10.split();
const v14 = [2.0,-4.0];
function f15(a16, a17, a18) {
    return a16;
}
const v19 = f15(v13, v13, f15);
function F20(a22, a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    try { a25.constructor(v13); } catch (e) {}
}
new F20(v14, f15, v19, F20);
gc();
