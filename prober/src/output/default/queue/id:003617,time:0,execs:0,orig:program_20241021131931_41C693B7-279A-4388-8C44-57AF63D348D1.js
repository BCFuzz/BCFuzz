function f0(a1, a2, a3, a4) {
    const t1 = ("n").trim;
    t1(a3, a2, "n");
    return f0;
}
try { f0(f0, f0, f0, f0); } catch (e) {}
gc();
