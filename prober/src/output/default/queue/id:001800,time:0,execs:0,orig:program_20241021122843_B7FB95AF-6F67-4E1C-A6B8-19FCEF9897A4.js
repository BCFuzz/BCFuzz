function* f1(a2, a3) {
    return -4096;
}
const t3 = f1();
t3.e >>>= -4096;
gc();
