function f0() {
    return delete f0.prototype;
}
f0();
f0();
gc();
