function f1(a2, a3) {
    a2.bind(f1);
    return a3;
}
for (let i = 0; i < 100; i++) {
    f1(f1);
}
gc();
