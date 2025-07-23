function f1() {
    return -17082n;
}
f1.valueOf = f1;
f1 ^ f1;
gc();
