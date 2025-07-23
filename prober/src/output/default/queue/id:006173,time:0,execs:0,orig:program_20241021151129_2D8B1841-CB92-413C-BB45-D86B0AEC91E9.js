const v2 = new Map();
function f3() {
    const v4 = -18610;
    return v4;
}
v2[Symbol.toPrimitive] = f3;
const v8 = new Uint8Array();
v8.slice(v2);
gc();
