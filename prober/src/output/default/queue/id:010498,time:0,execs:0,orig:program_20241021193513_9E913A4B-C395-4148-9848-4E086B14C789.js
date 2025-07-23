function f0() {
    return f0;
}
for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
for (let v11 = 0; v11 < 100; v11++) {
    function F12() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v14 = new F12();
    v14.constructor = f0;
    class C16 {
    }
    const v17 = new C16();
    class C18 {
        constructor(a20, a21) {
            this.g = this;
            const v22 = a21.constructor;
            v22(v22, Reflect);
            delete a21.g;
        }
        h;
    }
    const v25 = new C18(v14, v14);
    Object.defineProperty(v25, "constructor", { configurable: true, enumerable: true, value: f0 });
    new C18(v17, v25);
}
gc();
