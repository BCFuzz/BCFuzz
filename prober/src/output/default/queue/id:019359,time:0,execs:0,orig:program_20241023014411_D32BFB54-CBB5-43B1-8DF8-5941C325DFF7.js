function f0(a1, a2, a3) {
    return f0;
}
Reflect.construct(Promise, [f0], ArrayBuffer);
gc();
