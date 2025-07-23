for (let v0 = 0; v0 < 5; v0++) {
}
class C1 {
    constructor(a3, a4, a5, a6) {
        function f7(a8, a9, a10) {
            for (let v11 = 0; v11 < 5; v11++) {
            }
            return a9;
        }
        f7();
        f7();
        f7();
    }
}
new C1();
class C16 extends C1 {
}
new C16();
new C16();
new C16();
const v22 = new Uint8Array(153);
for (let i = 0; i < 5; i++) {
    new C1();
    for (const v24 in v22) {
    }
}
gc();
