class C1 extends Date {
}
function f2() {
    return f2;
}
function f3(a4, a5) {
    class C8 extends this.constructor {
    }
    const v9 = new C8();
    v9.constructor = f2;
}
for (let i = 0; i < 10; i++) {
    f3();
}
ensureArrayStorage.constructor = Date;
ensureArrayStorage.toString = f3;
new C1(ensureArrayStorage);
gc();
