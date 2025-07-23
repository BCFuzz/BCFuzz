for (let i2 = 10, i3 = -20873; -20873 < i3;) {
}
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
}
const v30 = `
    function f31(a32, a33, a34) {
        /\u{12345}/myvis;
        return f31;
    }
`;
const v37 = `
    function f38(a39) {
        return a39;
    }
`;
const v40 = v37.replaceAll(8, v30);
for (let i43 = -3, i44 = 10; 8 < i44; i44--) {
}
const v51 = [2.0,-4.0];
function f52(a53, a54, a55) {
    return v40;
}
const v56 = f52();
function F57(a59, a60, a61, a62) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a62, "constructor", { writable: true, configurable: true, value: eval });
    try { a62.constructor(v40); } catch (e) {}
}
new F57(v51, f52, v56, F57);
gc();
