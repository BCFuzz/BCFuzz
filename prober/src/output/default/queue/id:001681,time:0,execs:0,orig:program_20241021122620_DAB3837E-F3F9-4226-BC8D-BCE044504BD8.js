const v1 = new Date();
class C2 extends Date {
    constructor(a4, a5) {
        super();
        gc();
        for (let v8 = 0; v8 < 25; v8++) {
            v1["p" + v8] = v8;
        }
    }
}
const v11 = new C2();
new C2();
new C2();
class C14 extends C2 {
}
new C14();
for (let i = 0; i < 5; i++) {
    v11["toISOString"]();
}
gc();
