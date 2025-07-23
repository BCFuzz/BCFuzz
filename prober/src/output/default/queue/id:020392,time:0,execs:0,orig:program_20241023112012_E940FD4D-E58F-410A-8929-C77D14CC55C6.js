const v3 = new WeakSet();
const v4 = new Uint8ClampedArray(2422, 2422, 2422);
function f5() {
    v3.__proto__;
    this.b = this;
    return delete this.b;
}
const v10 = new Float64Array(2422);
v10.map(f5, v4);
gc();
