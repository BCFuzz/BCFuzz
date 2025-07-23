const v2 = new Uint32Array(255);
const v4 = new Int8Array(v2);
function f5() {
    return v4["sort"](f5);
}
const v9 = [[255,255,255,255]];
try { v9.forEach(f5); } catch (e) {}
gc();
