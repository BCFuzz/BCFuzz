function f0() {
    return f0;
}
const v1 = [1592376272,16,536870912,17293,1073741823,4,127,-9007199254740992];
let v2 = 2.0;
Object.defineProperty(v1, 7, { configurable: true, enumerable: true, get: f0, set: f0 });
v2--;
v1[v2];
const v7 = new Uint8ClampedArray(1262);
for (const v8 in v7) {
}
gc();
