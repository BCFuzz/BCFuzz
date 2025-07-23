function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
}
let v6;
try { v6 = F3.constructor(v2); } catch (e) {}
const v8 = new Set();
function f9() {
    return f9;
}
const v12 = new Int8Array(446);
v12.indexOf(...v8, f9, v6);
gc();
