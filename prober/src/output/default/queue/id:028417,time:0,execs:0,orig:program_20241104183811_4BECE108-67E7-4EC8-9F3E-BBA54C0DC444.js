class C1 {
    constructor(a3) {
        const v4 = /(?:a*)+/mvs;
        function f5(a6, a7, a8) {
            return a6;
        }
        v4.compile(128);
        C1.toLocaleString().replace(v4, f5);
    }
}
new C1();
gc();
