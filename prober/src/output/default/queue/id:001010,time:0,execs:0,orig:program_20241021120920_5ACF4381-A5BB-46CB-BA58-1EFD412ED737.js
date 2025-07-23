function f1(a2, a3) {
    return "p" >= a3;
}
new Promise(f1);
gc();
