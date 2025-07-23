function f0() {
    this.Int32Array;
    return this;
}
const v5 = new Float64Array(1201);
v5.map(f0);
gc();
