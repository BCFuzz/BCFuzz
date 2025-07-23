class C0 {
    constructor(a2, a3) {
        try { a2.hasOwnProperty(); } catch (e) {}
    }
}
for (let v5 = 0; v5 < 10; v5++) {
    class C6 extends C0 {
    }
    new C6();
}
gc();
