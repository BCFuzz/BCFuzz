class C0 {
}
const v1 = new C0();
class C2 extends C0 {
    constructor(a4, a5) {
        super();
        async function f6(a7, a8, a9) {
            await v1;
            return a5;
        }
        f6();
    }
}
const v12 = new C2(C2, v1);
new C2(v12, C0);
new C2();
gc();
