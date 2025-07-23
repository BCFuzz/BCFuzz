const v2 = new Uint32Array(1842);
v2[1787] = v2;
const v5 = new Uint8ClampedArray(2502);
for (const v6 in v5) {
}
const v8 = new Int8Array();
const v10 = new BigInt64Array(1842, 1842);
const v12 = [v8];
Reflect.apply(v10.set, v2, v12);
gc();
