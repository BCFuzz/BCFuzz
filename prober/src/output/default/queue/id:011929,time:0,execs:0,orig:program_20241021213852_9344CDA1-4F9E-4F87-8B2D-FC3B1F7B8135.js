for (let i = 0; i < 5; i++) {
}
for (let v0 = 0; v0 < 5; v0++) {
}
class C1 {
    constructor(a3, a4, a5, a6) {
        function f7(a8, a9, a10) {
            for (let v11 = 0; v11 < 5; v11++) {
            }
            return C1;
        }
        f7(this, this, a4);
        f7();
        f7();
    }
}
const v15 = new C1();
new C1(v15, v15, C1, C1);
class C17 extends C1 {
}
new C17();
const v19 = new C17();
const t22 = v19.constructor;
new t22();
const v22 = new C17();
const t25 = v22.constructor;
new t25();
const v27 = new Uint8Array(153);
for (let i30 = 0, i31 = 10; i30 < i31; i31--) {
}
for (let i = 0; i < 5; i++) {
    new C1();
    for (const v39 in v27) {
    }
}
gc();
