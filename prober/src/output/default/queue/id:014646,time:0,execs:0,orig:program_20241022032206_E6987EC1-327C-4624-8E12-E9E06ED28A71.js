function f1(a2, a3, a4) {
    try { eval(a3); } catch (e) {}
    return "function";
}
f1(f1("function", f1, f1), "function");
gc();
