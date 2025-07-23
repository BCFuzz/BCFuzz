function f1() {
    return true;
}
([3,255,-9223372036854775808,512,14504,10]).toSorted(f1);
gc();
