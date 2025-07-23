const v1 = ([6.762944533427021]).reverse();
function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
function f4(a5) {
    v1();
    return a5;
}
F2[Symbol.toPrimitive] = f4;
const v10 = new Map();
const v12 = new Uint8Array();
try { v12.slice(v10, F2); } catch (e) {}
gc();
