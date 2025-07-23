function f2() {
    return this.parseInt(9, -3);
}
const v7 = new Float64Array(1201);
v7.map(f2);
gc();
