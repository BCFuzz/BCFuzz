function f0(a1) {
    return a1;
}
const o3 = {
    get b() {
        return this;
    },
};
Object.defineProperty(o3, "b", { get: f0, set: f0 });
gc();
