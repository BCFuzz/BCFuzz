function f1() {
    return f1;
}
Object.defineProperty(String.prototype, 22255, { configurable: true, enumerable: true, value: f1 });
const v4 = [2.2250738585072014e-308,-351.39173286927814,-1.42002853459657e+308,-1e-15,5.0,-598089.2245110758,0.2882015350965105,1.7976931348623157e+308,1000000000.0];
const v7 = new WeakSet();
function f8() {
    v7.__proto__;
    this.b = this;
    delete this.b;
    return this;
}
const v13 = new Float64Array(2422);
v13.map(f8, v4);
gc();
