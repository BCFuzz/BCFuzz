function f0(a1, a2) {
    function f3() {
        return a1;
    }
    this.constructor.freeze(arguments);
    return f0;
}
f0(f0);
gc();
