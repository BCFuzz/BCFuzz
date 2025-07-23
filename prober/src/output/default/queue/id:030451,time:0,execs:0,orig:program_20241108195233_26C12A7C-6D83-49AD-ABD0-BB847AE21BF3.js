function f0() {
    return f0;
}
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F1();
const v8 = /(?<!)/mdvg;
const v9 = /[(?:a+)?]/su;
for (let i13 = 10, i14 = 1289; -13369 !== i14; i14--) {
}
const v21 = `
    Object.defineProperty(v8, v7, { writable: true, configurable: true, set: f0 });
    /\u{12345}/myvis;
`;
const v23 = v21.split(v9);
const v24 = [2.0,-4.0];
function f25(a26, a27, a28) {
    return a28;
}
const v29 = f25(1289, v24, v9);
function F30(a32, a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    try { a35.constructor(v23); } catch (e) {}
}
new F30(v24, f25, v29, F30);
gc();
