class C1 extends Date {
}
function f2(a3, a4) {
    const v6 = this.constructor;
    class C7 extends v6 {
    }
    const v8 = new C7();
    const v9 = v8.valueOf(C7, v6);
    v9.h = v9;
}
for (let i = 0; i < 10; i++) {
    f2(f2, Date);
}
ensureArrayStorage.constructor = Date;
ensureArrayStorage.toString = f2;
new C1(ensureArrayStorage);
gc();
