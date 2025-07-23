const v1 = [BigInt64Array];
function f2() {
}
Object.defineProperty(v1, "configurable", { enumerable: true, get: f2 });
const v4 = new BigInt64Array(256);
Reflect.defineProperty(v4, 127, v1);
gc();
