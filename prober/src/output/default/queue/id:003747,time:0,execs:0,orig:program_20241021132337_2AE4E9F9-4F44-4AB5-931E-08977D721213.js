const v1 = new Uint32Array();
function f3() {
    const v4 = v1 - v1;
    return v4 * v4;
}
Object.defineProperty(BigInt64Array, "toString", { writable: true, configurable: true, enumerable: true, value: f3 });
function f6() {
    const v7 = [BigInt64Array];
    new Int16Array([v7,[v7,v7,v7,BigInt64Array]]);
    return f3;
}
f6();
f6();
gc();
