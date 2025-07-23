function f0() {
    const v1 = [f0,f0,f0,f0,f0];
    const v2 = v1.lastIndexOf;
    try { v2(v1); } catch (e) {}
    return f0;
}
f0();
gc();
