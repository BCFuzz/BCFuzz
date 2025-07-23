for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const v10 = `
    [1073741824,3,-8,824826880,-5,-9223372036854775807,1056563025,5,-14];
    /\u{12345}/myvis;
`;
const v13 = v10.split();
const v14 = [2.0,-4.0];
function f15(a16, a17, a18) {
    return a16;
}
const v19 = f15();
function F20(a22, a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    try { a25.constructor(v13, this); } catch (e) {}
}
new F20(v14, f15, v19, F20);
gc();
