class C1 {
}
const v2 = new C1();
function f3() {
    return arguments;
}
const v5 = f3();
function f6(a7, a8) {
    return a7;
}
new f6(v2, delete C1.c, 5, ...v5);
gc();
