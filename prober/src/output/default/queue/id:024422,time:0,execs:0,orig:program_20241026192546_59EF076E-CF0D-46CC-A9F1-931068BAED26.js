function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new Uint8Array(F1, Uint8Array);
v6.buffer.transfer();
function f9(a10, a11, a12, a13) {
    return a12.__defineGetter__(46313n, F1);
}
try { f9(Uint8Array, Uint8Array, v6); } catch (e) {}
gc();
