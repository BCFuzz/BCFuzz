function f0() {
    new Uint32Array(268435456);
    return f0;
}
f0();
f0();
f0();
eval("");
gc();
