const v1 = new Map();
function f2(a3) {
    return [4096];
}
v1.toString = f2;
const v6 = new Uint8Array(v1, Uint8Array, Map);
try { v6.slice(v1); } catch (e) {}
gc();
