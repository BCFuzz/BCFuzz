const v1 = new WeakSet();
function f2() {
    try { Math.clz32(v1); } catch (e) {}
    return 1024;
}
v1.valueOf = f2;
v1 <= 255;
gc();
