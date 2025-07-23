function f0(a1, a2) {
    this.constructor.freeze(arguments);
    return arguments;
}
f0(f0);
gc();
