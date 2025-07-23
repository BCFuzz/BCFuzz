function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
function f7(a8, a9) {
    return arguments[1];
}
try { f7(); } catch (e) {}
const v15 = new Uint32Array(1000);
for (const v16 in v15) {
}
gc();
