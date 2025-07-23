const v0 = /0Ti\ud808\udf45*/mvg;
let v1;
try { v1 = v0(); } catch (e) {}
const v2 = [1886715396,-2147483647,-65536,-65536,6,6,-2147483647];
Object.defineProperty(v2, "set", { configurable: true, enumerable: true, get: v1 });
function f3(a4, a5) {
    Reflect.defineProperty(Uint8Array, a4, v2);
    return a4;
}
f3.call(v2, v1);
gc();
