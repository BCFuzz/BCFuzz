class C1 {
    static get b() {
    }
    g;
    constructor(a5, a6) {
        delete this.g;
    }
    static b;
}
function f8(a9, a10, a11, a12) {
    for (let v13 = 0; v13 < 100; v13++) {
        class C14 extends C1 {
        }
        new C14();
        for (let i = 0; i < 100; i++) {
        }
    }
    return a11;
}
f8();
gc();
