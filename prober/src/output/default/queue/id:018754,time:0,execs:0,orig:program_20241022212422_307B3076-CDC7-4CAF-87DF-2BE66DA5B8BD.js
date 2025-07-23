function f0(a1, a2) {
    Reflect.getPrototypeOf(this);
    return a2;
}
for (let i = 0; i < 10; i++) {
    f0();
}
gc();
