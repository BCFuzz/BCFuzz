function f0() {
    return f0;
}
([f0])["concat"](WeakMap, f0());
gc();
