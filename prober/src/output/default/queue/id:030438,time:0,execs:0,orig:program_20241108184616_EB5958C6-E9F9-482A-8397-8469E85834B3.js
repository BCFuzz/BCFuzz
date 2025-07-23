let v1 = 8;
v1--;
const v3 = `
    [1000000000.0,-2.0,-822.2701748699242,-5.0];
    /\u{12345}/myvis;
`;
const v6 = v3.replaceAll(v1, "__proto__");
for (let i8 = 10, i9 = 10; v1 < i9; i9--) {
}
const v16 = [2.0,-4.0];
function f17(a18, a19, a20) {
    return a20;
}
const v21 = f17(f17, "__proto__", v3);
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    try { a27.constructor(v6); } catch (e) {}
}
new F22(v16, f17, v21, F22);
gc();
