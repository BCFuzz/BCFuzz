function f0(a1, a2) {
    this.constructor.getOwnPropertySymbols(arguments);
    return f0;
}
f0(f0, f0);
gc();
