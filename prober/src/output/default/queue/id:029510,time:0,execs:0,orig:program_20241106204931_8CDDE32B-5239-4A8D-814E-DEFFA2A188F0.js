const v2 = -536870912 >>> 105;
function f3() {
    return v2;
}
const v4 = [-127814.66274163057,-0.0,3.0,-0.0,1000000000.0,1000000.0,1e-15];
v4.toString = f3;
v4[0] = v4;
const v7 = new Uint32Array(1000);
for (const v8 in v7) {
    105 % v4.join(v8.toLocaleLowerCase().trimStart());
}
gc();
