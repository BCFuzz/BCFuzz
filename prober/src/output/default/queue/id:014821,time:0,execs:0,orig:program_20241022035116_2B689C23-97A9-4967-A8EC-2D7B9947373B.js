for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let v10 = 0; v10 < 50; v10++) {
    function F11() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v13 = new F11();
    class C15 {
    }
    const v16 = new C15();
    class C17 {
        constructor(a19, a20) {
            this.g = this;
            const v21 = a20.constructor;
            new v21(v21, Reflect);
            delete a20.g;
            let v24 = 5;
            v24++;
            for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
            }
            delete a20.h;
        }
        h;
    }
    const v37 = new C17(v13, v13);
    new C17(v16, v37);
}
gc();
