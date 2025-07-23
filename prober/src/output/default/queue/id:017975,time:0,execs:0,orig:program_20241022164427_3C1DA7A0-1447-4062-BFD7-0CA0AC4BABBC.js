function f0() {
    f0 >>>= f0;
    return f0;
}
f0();
const v3 = new Int16Array();
v3.constructor = f0;
try { v3.slice(); } catch (e) {}
gc();
