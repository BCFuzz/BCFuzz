class C0 {
    constructor(a2, a3) {
        function* f4(a5, a6, a7, a8) {
            return this;
        }
    }
}
class C9 extends C0 {
}
const v10 = new C9();
const v11 = v10.constructor;
for (let v12 = 0; v12 < 100; v12++) {
    new v11();
}
gc();
