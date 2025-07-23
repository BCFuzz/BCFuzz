const o1 = {
    get d() {
        this.f = this;
        return this;
    },
};
function f2() {
    return f2;
}
function f3(a4) {
    const v7 = new Uint32Array(1000);
    for (const v8 in v7) {
        function f9(a10, a11, a12, a13) {
            return arguments;
        }
        f9();
    }
    return 1000;
}
Object.defineProperty(o1, "f", { enumerable: true, get: f2, set: f3 });
const o16 = {
    ...o1,
};
gc();
