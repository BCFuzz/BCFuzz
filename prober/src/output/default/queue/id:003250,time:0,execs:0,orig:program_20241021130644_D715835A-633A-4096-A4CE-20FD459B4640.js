function f0(a1, a2) {
    return a2;
}
Reflect.construct(Date, f0);
gc();
