let v0 = 8;
class C1 {
    constructor() {
        v0--;
        Array().splice(13, 1);
        for (let v9 = 0; v9 < 50; v9++) {
        }
    }
}
const v10 = new C1();
const t10 = v10.constructor;
const v12 = new t10();
const t12 = v12.constructor;
new t12();
gc();
