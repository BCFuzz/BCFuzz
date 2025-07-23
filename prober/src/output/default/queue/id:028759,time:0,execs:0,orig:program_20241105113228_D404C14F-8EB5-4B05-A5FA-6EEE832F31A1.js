const v2 = new Float32Array(23);
class C4 {
}
function f5() {
    return v2[1057];
}
C4.valueOf = f5;
function f7() {
    this.b = this;
    delete this.b;
    return C4;
}
const v12 = new Float64Array(1201);
v12.map(f7, v2);
gc();
