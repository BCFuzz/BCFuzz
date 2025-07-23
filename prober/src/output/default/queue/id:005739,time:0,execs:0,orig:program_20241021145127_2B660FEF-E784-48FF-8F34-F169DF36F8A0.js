function f0() {
    return f0;
}
Error(f0 + 4096);
gc();
