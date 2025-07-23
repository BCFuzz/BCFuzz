const v1 = new Uint16Array(Uint16Array, Uint16Array, Uint16Array);
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    a5.constructor = "sticky";
    a5.slice(a6, "sticky", F3);
}
try { new F3(v1); } catch (e) {}
gc();
