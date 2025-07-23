function f1() {
    return Date;
}
function f2(a3) {
    return f2;
}
Object.defineProperty(Date, "constructor", { configurable: true, enumerable: true, get: f1, set: f2 });
class C4 extends Date {
}
function f5(a6, a7) {
    class C10 extends this.constructor {
    }
    const v11 = new C10();
    v11.constructor;
    return a7;
}
for (let i = 0; i < 10; i++) {
    f5();
}
function f15(a16, a17) {
    return Date;
}
Object.defineProperty(ensureArrayStorage, "constructor", { writable: true, value: f15 });
ensureArrayStorage.toString = f5;
new C4(ensureArrayStorage);
gc();
