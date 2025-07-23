const v2 = new Uint8ClampedArray(Uint8Array, Uint8Array, Uint8Array);
const v3 = v2[1];
const v4 = new Uint8Array();
function f5() {
    return v3();
}
v4.toString = f5;
try { v4.copyWithin(v2, v4); } catch (e) {}
gc();
