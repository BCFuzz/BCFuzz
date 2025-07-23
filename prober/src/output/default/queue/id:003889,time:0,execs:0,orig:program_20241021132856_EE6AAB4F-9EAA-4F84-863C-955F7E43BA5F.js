class C0 {
    constructor(a2, a3) {
        function f4() {
            const v6 = new Int8Array();
            new Float32Array(v6);
        }
        f4();
        f4();
    }
}
const v11 = new C0();
const v12 = new C0(v11, v11);
class C13 extends C0 {
}
const v14 = new C13();
const v15 = v14.constructor;
new v15(v15, C0, v12);
class C17 extends C0 {
}
new C17();
gc();
