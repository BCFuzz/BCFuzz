function f0() {
    function f2(a3, a4) {
        return a3;
    }
    Object.defineProperty(f2, "toString", { writable: true, enumerable: true, value: Symbol });
    f2.hasOwnProperty(f2);
    return f0;
}
f0();
f0();
gc();
