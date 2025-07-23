for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const v11 = `
    [1073741824,3,-8,824826880,-5,-9223372036854775807,1056563025,5,-14];
    /\u{12345}/myvis;
`;
const v14 = v11.split(8);
const v15 = [2.0,-4.0];
function f16(a17, a18, a19) {
    return a18;
}
const v20 = f16(f16, v15, 8);
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    try { a26.constructor(v14); } catch (e) {}
}
new F21(v15, f16, v20, F21);
gc();
