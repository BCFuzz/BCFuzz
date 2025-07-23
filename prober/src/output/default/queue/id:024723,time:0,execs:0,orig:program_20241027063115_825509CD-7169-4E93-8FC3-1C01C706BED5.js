class C0 {
    constructor(a2, a3, a4, a5) {
        for (let i = 0; i < 5; i++) {
            const v6 = this.__proto__;
            super.a = a3;
            try {
                super.sinh(v6);
            } catch(e8) {
            }
        }
    }
}
const v9 = new C0();
const v10 = v9.constructor;
class C11 extends C0 {
}
new C11();
for (let i = 0; i < 100; i++) {
    new v10();
}
gc();
