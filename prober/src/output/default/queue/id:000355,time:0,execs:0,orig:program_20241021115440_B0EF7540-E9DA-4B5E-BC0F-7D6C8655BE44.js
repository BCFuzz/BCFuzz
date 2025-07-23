let v3;
try { v3 = Uint32Array(2, 2); } catch (e) {}
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
}
const v12 = new F8(v3, v3);
v12.length = v12;
gc();
