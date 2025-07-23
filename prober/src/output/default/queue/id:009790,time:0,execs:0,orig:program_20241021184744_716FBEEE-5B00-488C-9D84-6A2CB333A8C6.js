for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let v10 = 0; v10 < 100; v10++) {
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
            delete this.h;
        }
        h;
    }
    const v25 = new C17(v13, v13);
    new C17(v16, v25);
}
gc();
