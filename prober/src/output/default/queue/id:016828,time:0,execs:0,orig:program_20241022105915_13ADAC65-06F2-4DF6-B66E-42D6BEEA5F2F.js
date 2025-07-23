for (let v1 = 0; v1 < 100; v1++) {
    function f2() {
        return f2;
    }
    Object.defineProperty(Array, "a", { configurable: true, enumerable: true, set: f2 });
}
const o3 = {
    ...Array,
};
gc();
