function f1(a2, a3) {
    let v4 = 53874;
    return (++v4 + a2) << 8.485624928239574;
}
const v8 = [8.485624928239574];
v8[Symbol.toPrimitive] = f1;
function f11() {
    Reflect.deleteProperty(arguments, v8);
    return Reflect;
}
f11();
gc();
