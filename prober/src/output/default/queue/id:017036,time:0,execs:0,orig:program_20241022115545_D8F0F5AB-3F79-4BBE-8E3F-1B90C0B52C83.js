const o8 = {
    toString(a4, a5) {
        class C6 {
        }
        class C7 extends C6 {
        }
        Object.defineProperty(C6, 6, { configurable: true, value: 2.220446049250313e-16 });
        return a4;
    },
};
o8.toString();
const v10 = Array(129);
const o11 = {
    __proto__: v10,
};
for (let v12 = 0; v12 < 5; v12++) {
    class C13 {
        constructor() {
            this.g = this;
        }
        set g(a16) {
            v10[4];
        }
    }
    new C13();
    new C13();
}
gc();
