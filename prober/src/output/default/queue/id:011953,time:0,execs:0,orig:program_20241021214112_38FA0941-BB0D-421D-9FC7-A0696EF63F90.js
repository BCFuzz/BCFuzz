const v1 = new Int16Array();
function f2() {
    return Int16Array;
}
f2.toString = v1;
const v3 = [f2];
try { v3.toLocaleString(); } catch (e) {}
gc();
