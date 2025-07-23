class C0 {
}
const v1 = new C0();
function f2() {
    return C0;
}
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new F3();
function f10(a11, a12, a13) {
    Object.defineProperty(arguments, 2, { enumerable: true, get: f2 });
    return v9;
}
f10(f10, v1, v9);
gc();
