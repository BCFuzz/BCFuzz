function f1(a2, a3) {
    a2(2n);
    return f1;
}
new Promise(f1);
gc();
