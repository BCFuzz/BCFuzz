function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f4() {
    const v6 = new ArrayBuffer(40701, ArrayBuffer);
    new Float64Array(v6, v2, 40701);
    return v6;
}
try { f4(); } catch (e) {}
gc();
