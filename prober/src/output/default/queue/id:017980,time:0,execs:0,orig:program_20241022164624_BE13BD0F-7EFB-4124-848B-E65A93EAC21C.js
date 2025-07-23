const v2 = new BigInt64Array(1000);
const v5 = new Int32Array(681);
function f6(a7, a8, a9, a10) {
    return arguments;
}
v5.map(f6);
f6(...v2, f6, Int32Array, ...v5);
gc();
