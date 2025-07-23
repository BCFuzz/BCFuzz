function f0() {
    return f0;
}
class C1 {
}
C1.eval = f0;
with (C1) {
    eval();
}
gc();
