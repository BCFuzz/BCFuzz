class C0 {
    constructor(a2, a3, a4, a5) {
        function f7(a8, a9, a10) {
            Object.defineProperty(arguments, 134, { writable: true, configurable: true, value: a3 });
            function f12(a13, a14) {
                return 255;
            }
            arguments.toString = f12;
            Object.defineProperty(arguments, "length", { writable: true, configurable: true, enumerable: true, value: arguments });
            gc.apply(a8, arguments);
            return a3;
        }
        f7(a2, C0, 255);
    }
}
new C0(C0, C0, C0, C0);
gc();
