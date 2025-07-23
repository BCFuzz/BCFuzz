class C0 {
    constructor(a2, a3, a4, a5) {
        for (let i = 0; i < 5; i++) {
            this.__proto__;
        }
    }
}
const v7 = new C0();
const v8 = v7.constructor;
class C9 extends C0 {
}
new C9();
for (let i = 0; i < 100; i++) {
    new v8();
}
gc();
