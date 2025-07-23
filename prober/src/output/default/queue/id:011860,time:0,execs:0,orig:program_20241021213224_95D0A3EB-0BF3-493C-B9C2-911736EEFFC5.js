for (let v0 = 0; v0 < 5; v0++) {
}
for (let i = 0; i < 5; i++) {
}
for (let v1 = 0; v1 < 5; v1++) {
}
class C2 {
    constructor(a4, a5, a6, a7) {
        function f8(a9, a10, a11) {
            for (let v12 = 0; v12 < 5; v12++) {
            }
            return a7;
        }
        f8();
        f8();
        f8(a7, a4, a5);
    }
}
const v16 = new C2();
class C17 extends C2 {
}
new C17();
new C17();
const v20 = new C17();
const v23 = new Uint8Array(153);
for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
}
for (let i = 0; i < 5; i++) {
    new C2(C17, Uint8Array, v20, v16);
    for (const v35 in v23) {
    }
}
gc();
