function f1() {
    return f1;
}
const v2 = new Int8Array();
v2.toString = f1;
try { v2.join(v2); } catch (e) {}
gc();
