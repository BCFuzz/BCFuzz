class C0 {
    constructor(a2, a3, a4, a5) {
        function f7(a8, a9, a10) {
            function f12(a13, a14) {
                return 255;
            }
            arguments.toString = f12;
            Object.defineProperty(arguments, "length", { writable: true, configurable: true, enumerable: true, value: arguments });
            gc.apply(a8, arguments);
            return arguments;
        }
        f7();
    }
}
new C0();
gc();
