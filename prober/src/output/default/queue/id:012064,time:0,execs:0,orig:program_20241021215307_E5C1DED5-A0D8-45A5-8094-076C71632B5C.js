class C0 {
}
class C1 extends C0 {
}
const v2 = new C1();
function f3() {
    return f3;
}
function f4(a5) {
}
Object.defineProperty(v2, "toString", { enumerable: true, get: f3, set: f4 });
gc();
