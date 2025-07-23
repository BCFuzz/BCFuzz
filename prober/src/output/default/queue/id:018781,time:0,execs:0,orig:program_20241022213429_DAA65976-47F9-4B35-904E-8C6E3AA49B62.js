function f0() {
    this.b = this;
    this.b = this;
    delete this.b;
    return this;
}
const v5 = new Float64Array(1201);
v5.map(f0);
gc();
