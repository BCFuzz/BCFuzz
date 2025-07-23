for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
const v12 = `
    /\u{12345}/myvis;
    Int16Array(128);
`;
const v16 = v12.split(8);
const v17 = [2.0,-4.0];
function f18(a19, a20, a21) {
    return Int16Array;
}
const v22 = f18();
function F23(a25, a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    a28.constructor(v16);
}
new F23(v17, f18, v22, F23);
gc();
