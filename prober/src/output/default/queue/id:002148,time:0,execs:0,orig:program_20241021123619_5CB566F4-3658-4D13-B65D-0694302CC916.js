const o5 = {
    get b() {
        return this;
    },
    get d() {
        this[Symbol.toStringTag] = this;
        delete this.b;
        return this;
    },
};
function f6(a7, a8) {
    const o9 = {
        ...o5,
    };
    return o9;
}
f6();
f6();
gc();
