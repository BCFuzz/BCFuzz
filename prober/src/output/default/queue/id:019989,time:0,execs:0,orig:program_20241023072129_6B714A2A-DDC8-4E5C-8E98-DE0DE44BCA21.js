for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let v10 = 0; v10 < 10; v10++) {
    function f11(a12) {
        const v14 = new WeakMap();
        class C15 extends WeakMap {
        }
        const v16 = new C15();
        v16.has(v14[8]);
        return f11;
    }
    f11();
    f11(f11);
}
gc();
