const v0 = [1e-15,6.970783332155994e+307,3.5592240972424766e+307,1.7976931348623157e+308,-1.0];
const v1 = [-1e-15];
function f2() {
    const v6 = -(-6 >>> v0.length);
    let v7 = v6 * v6;
    v7++;
    return v7;
}
v1[Symbol.toPrimitive] = f2;
function f12() {
    v1 % --f12;
    return f12;
}
const v16 = new Uint32Array(2216);
v16.reduce(f12);
gc();
