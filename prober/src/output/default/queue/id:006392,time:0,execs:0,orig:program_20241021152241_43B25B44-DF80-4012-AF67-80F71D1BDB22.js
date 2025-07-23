const v1 = Array();
function f2() {
    return f2;
}
v1[Symbol.iterator] = f2;
try { new Int32Array(v1); } catch (e) {}
gc();
