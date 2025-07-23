const o5 = {
    get b() {
        return this;
    },
    get d() {
        delete this.b;
        gc();
        return this;
    },
};
function f6(a7, a8) {
    const o9 = {
        ...o5,
    };
    return o5;
}
f6();
f6();
gc();
