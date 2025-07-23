const v3 = new Float32Array();
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a7(v3, v3, Array); } catch (e) {}
    try { a9.call(); } catch (e) {}
    for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
    }
}
const v23 = new F5(F5);
const v24 = new F5(F5, v23, F5);
const t10 = v24.constructor;
new t10(Float32Array, 5, Uint16Array);
gc();
