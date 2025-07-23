class C0 {
}
const v1 = new C0();
function f2() {
    Object.defineProperty(arguments, "callee", { value: v1 });
    return C0;
}
f2();
gc();
