function f0() {
    const t1 = ("boolean").__proto__;
    t1[16n] = 256n;
    return f0;
}
f0();
gc();
f0();
gc();
