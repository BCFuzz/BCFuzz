for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let v10 = 0; v10 < 50; v10++) {
    function F11() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v13 = new F11();
    class C14 {
    }
    const v15 = new C14();
    class C16 {
        constructor(a18, a19) {
            delete a19.g;
            for (let v21 = 0; v21 < 5; v21++) {
                v21 < a19;
            }
        }
    }
    const v23 = new C16(v13, v13);
    new C16(v15, v23);
}
gc();
