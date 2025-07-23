function f0() {
    try { ("delete").replace("delete", f0); } catch (e) {}
    return f0;
}
f0();
gc();
