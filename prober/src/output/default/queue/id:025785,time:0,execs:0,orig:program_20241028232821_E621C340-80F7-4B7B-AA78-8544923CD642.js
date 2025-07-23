for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v11 = new Float32Array();
const v13 = `
    const v14 = delete v11[Float32Array];
    const o15 = {
    };
    o15.a = v14;
    /\u{12345}/myvis;
`;
const v17 = v13.split(3);
const v18 = [2.0,-4.0];
function f19(a20, a21, a22) {
}
const v23 = f19();
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    try { a29.constructor(v17); } catch (e) {}
}
new F24(v18, f19, v23, F24);
gc();
