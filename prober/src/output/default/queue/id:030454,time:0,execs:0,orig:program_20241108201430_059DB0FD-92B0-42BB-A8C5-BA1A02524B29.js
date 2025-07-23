function f0() {
    return f0;
}
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F1(f0, F1, f0, f0);
const v8 = /(?<!)/mdvg;
const v9 = /[(?:a+)?]/su;
for (let i13 = 10, i14 = 1289; -13369 !== i14; i14--) {
}
const v21 = `
    Object.defineProperty(v8, v7, { writable: true, configurable: true, set: f0 });
`;
const v22 = v21.split(v9);
const v23 = [2.0,-4.0];
function f24(a25, a26, a27) {
    return a27;
}
const v28 = f24(v8, F1, v7);
function F29(a31, a32, a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
    try { a34.constructor(v22); } catch (e) {}
}
new F29(v23, f24, v28, F29);
gc();
