function f0(a1, a2, a3) {
    arguments.length = arguments;
    function f5(a6, a7) {
        a7 >>> a3;
        return a7;
    }
    Object.defineProperty(arguments, "length", { writable: true, configurable: true, enumerable: true, value: arguments });
    return a3;
}
f0();
gc();
