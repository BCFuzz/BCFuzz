class C0 {
}
const v1 = new C0();
function f2(a3, a4) {
    class C5 {
        constructor(a7, a8) {
            const t6 = this.__proto__;
            t6.valueOf = a8;
        }
    }
    new C5(a4, C0);
    return C0;
}
v1.constructor = f2;
const t14 = v1.constructor;
t14();
const v13 = new C0();
class C14 {
    constructor(a16, a17, a18) {
        for (const v19 in a16) {
        }
    }
}
new C14(v13);
gc();
