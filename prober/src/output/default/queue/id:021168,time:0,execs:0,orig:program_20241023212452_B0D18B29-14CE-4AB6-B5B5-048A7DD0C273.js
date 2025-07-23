class C1 {
    constructor(a3, a4, a5, a6) {
        function f8(a9, a10, a11) {
            arguments[202] = 0.867797367862352;
            function f13(a14, a15) {
                return 255;
            }
            arguments.toString = f13;
            Object.defineProperty(arguments, "length", { writable: true, configurable: true, enumerable: true, value: arguments });
            gc.apply(a9, arguments);
            return arguments;
        }
        f8();
    }
}
new C1();
gc();
