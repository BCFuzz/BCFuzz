const v1 = TypeError();
function f2() {
    delete this.column;
    return TypeError;
}
const v7 = new Float64Array(1201);
v7.map(f2, v1);
gc();
