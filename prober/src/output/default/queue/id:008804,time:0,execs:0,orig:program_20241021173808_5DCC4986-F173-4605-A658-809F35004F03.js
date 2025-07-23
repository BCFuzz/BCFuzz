function f1() {
    new Int16Array(4294967296);
    return f1;
}
try { f1(); } catch (e) {}
gc();
