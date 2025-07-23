function f1(a2, a3) {
    function f4() {
        return a2;
    }
    arguments.callee |= 2860;
    return this.constructor.freeze(arguments);
}
f1(f1, f1);
gc();
