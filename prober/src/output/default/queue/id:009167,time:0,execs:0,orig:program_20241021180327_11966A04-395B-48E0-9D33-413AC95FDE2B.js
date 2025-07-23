function f0(a1, a2, a3) {
    f0(a1, f0, f0);
    return f0;
}
f0.length = f0;
try { f0(); } catch (e) {}
gc();
