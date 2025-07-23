function f1() {
    const v3 = ("n").fontcolor();
    Object.defineProperty(Array, 0, { value: v3 });
    return v3;
}
const v6 = new Int32Array(257);
v6.map(f1);
gc();
