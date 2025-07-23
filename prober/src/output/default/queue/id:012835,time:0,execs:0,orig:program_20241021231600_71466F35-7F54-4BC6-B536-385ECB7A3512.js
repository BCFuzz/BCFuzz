const v1 = ReferenceError();
Object.defineProperty(v1, "toString", { configurable: true, value: ReferenceError });
const v2 = v1.toString;
function f3(a4, a5) {
    let v9 = -2 + (-2 / 516240325);
    return v9++;
}
v2[Symbol.toPrimitive] = f3;
const v14 = new Int32Array();
const v16 = new Int32Array(209);
function f17() {
    return ReferenceError;
}
const v19 = [f17];
Reflect.apply(v14.toSorted, v16, v19);
gc();
