function f1(a2, a3) {
    return -2.0;
}
const v6 = new Float64Array(1000);
Object.defineProperty(v6, "toString", { configurable: true, value: f1 });
v6[0] = v6;
v6.sort();
gc();
