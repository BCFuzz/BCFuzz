class C1 {
    constructor(a3) {
        C1[a3] = this;
        const v6 = new Int32Array(681);
        function f7(a8, a9, a10, a11) {
            C1[Symbol.matchAll] = a8;
        }
        v6.map(f7);
    }
}
new C1(C1);
new C1("valueOf");
gc();
