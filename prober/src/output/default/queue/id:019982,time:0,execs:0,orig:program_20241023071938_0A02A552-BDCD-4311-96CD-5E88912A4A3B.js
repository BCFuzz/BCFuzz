const v2 = new Int8Array(129);
function f3(a4) {
    return v2;
}
const v6 = Symbol.species;
v2.buffer;
f3[v6] = f3;
const v9 = new Uint32Array(Uint32Array);
const v10 = v9.subarray();
v10.constructor = f3;
v10.slice();
for (let i14 = 0, i15 = 10; i14 !== i15; i15--) {
}
gc();
