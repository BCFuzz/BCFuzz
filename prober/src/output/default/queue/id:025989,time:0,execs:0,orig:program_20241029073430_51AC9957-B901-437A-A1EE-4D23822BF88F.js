function f0(a1, a2) {
    arguments[0] = arguments;
    const v5 = this.constructor;
    v5.freeze(a1);
    v5.freeze(arguments);
    return this;
}
f0(f0);
gc();
