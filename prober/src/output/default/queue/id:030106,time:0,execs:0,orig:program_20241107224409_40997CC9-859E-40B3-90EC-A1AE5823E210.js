for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
const v21 = `
    function* f22(a23, a24, a25) {
        /\u{12345}/myvis;
        return a25;
    }
`;
const v28 = `
    [1000000000.0,-2.0,-822.2701748699242,-5.0];
`;
const v30 = v28.replaceAll(8, v21);
for (let i33 = -3, i34 = 10; 8 < i34; i34--) {
}
const v41 = [2.0,-4.0];
function f42(a43, a44, a45) {
    return v30;
}
const v46 = f42();
function F47(a49, a50, a51, a52) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a52, "constructor", { writable: true, configurable: true, value: eval });
    try { a52.constructor(v30); } catch (e) {}
}
new F47(v41, f42, v46, F47);
gc();
