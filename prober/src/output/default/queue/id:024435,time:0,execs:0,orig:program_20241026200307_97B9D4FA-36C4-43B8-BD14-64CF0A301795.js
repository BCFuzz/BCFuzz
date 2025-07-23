const v1 = TypeError(TypeError);
function f2() {
    const t2 = this.__proto__;
    delete t2.b;
    return f2;
}
const v8 = new Float64Array(1201);
v8.map(f2, v1);
gc();
