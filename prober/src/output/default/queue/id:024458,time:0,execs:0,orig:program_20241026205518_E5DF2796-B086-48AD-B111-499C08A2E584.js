class C2 {
    constructor(a4, a5, a6, a7) {
        function f8() {
            return f8;
        }
        function f9(a10) {
            /(?:a*)*OW*/miu.exec(a10);
            return "number";
        }
        Object.defineProperty(a4, "e", { configurable: true, get: f8, set: f9 });
        for (let i = 0; i < 5; i++) {
            a4.e = "number";
            a7.e = 255;
            a7.e = a7;
        }
    }
}
new C2(C2, C2, C2, C2);
gc();
