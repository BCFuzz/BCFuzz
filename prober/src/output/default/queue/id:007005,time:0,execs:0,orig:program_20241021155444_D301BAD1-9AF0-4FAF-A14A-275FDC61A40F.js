const v1 = (13).__proto__;
function f2(a3) {
    v1.toString = a3;
    return a3;
}
v1[Symbol.toPrimitive] = f2;
v1 << v1;
gc();
