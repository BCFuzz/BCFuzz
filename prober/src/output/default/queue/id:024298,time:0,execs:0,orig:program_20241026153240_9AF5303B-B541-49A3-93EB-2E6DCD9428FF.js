for (let i3 = -3, i4 = 10; i4--, i3 < i4;) {
}
const v11 = `
    /\u{12345}/myvis;
    class C14 extends Uint8Array {
    }
`;
const v15 = v11.split(8);
const v16 = [2.0,-4.0];
function f17(a18, a19, a20) {
    return a18;
}
const v21 = f17();
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    try { a27.constructor(v15); } catch (e) {}
}
new F22(v16, f17, v21, F22);
gc();
