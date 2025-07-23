class C0 {
    constructor(a2, a3) {
        function f4(a5, a6, a7, a8) {
            return a3;
        }
        f4.apply();
    }
}
class C10 extends C0 {
}
const v11 = new C10();
const v12 = v11.constructor;
new v12(C0, v12);
for (let i = 0; i < 250; i++) {
}
gc();
