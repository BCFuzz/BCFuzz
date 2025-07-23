function f0() {
    return f0;
}
function f1(a2, a3) {
    a2.arguments;
    return f1;
}
f1(f0);
gc();
