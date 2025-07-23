function f1(a2, a3, a4) {
    function f6(a7, a8) {
        return 255;
    }
    arguments.toString = f6;
    Object.defineProperty(arguments, "length", { writable: true, configurable: true, enumerable: true, value: arguments });
    gc.apply(a2, arguments);
    return a4;
}
f1(255);
gc();
