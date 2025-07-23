class C0 {
}
function f1() {
    return C0;
}
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
for (let v12 = 0; v12 < 50; v12++) {
    const v13 = new C0();
    v13.constructor = f1;
    const v14 = new C0();
    class C15 {
        constructor(a17, a18) {
            a18.constructor;
        }
        h;
    }
    const v20 = new C15(v13, v13);
    Object.defineProperty(v20, "constructor", { configurable: true, enumerable: true, value: f1 });
    new C15(v14, v20);
}
gc();
