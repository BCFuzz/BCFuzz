let v1 = Symbol;
function f2() {
    return 536870887;
}
v1[v1.toPrimitive] = f2;
function f4() {
    Math.log(v1);
    --v1;
    return v1;
}
const v10 = new Uint32Array(4046);
v10.reduce(f4);
gc();
