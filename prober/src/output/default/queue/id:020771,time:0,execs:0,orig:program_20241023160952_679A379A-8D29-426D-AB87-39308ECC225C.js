class C0 {
    constructor(a2, a3, a4, a5) {
        for (let i = 0; i < 5; i++) {
            this.__proto__.toString(a2, this, C0, C0, C0);
        }
    }
}
const v8 = new C0();
const v9 = v8.constructor;
class C10 extends C0 {
}
const v11 = new C10();
for (let i = 0; i < 100; i++) {
    new v9(v11);
}
gc();
