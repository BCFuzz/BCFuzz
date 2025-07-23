function f0() {
    return f0;
}
eval(f0.name);
gc();
