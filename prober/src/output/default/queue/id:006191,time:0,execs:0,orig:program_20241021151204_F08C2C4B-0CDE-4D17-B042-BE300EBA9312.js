function f0(a1, a2) {
    new Int16Array(a2);
    return a2;
}
for (let i = 0; i < 10; i++) {
    f0();
}
gc();
