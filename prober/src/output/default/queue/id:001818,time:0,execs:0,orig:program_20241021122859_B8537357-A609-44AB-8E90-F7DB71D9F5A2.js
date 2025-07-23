function f0() {
    return f0;
}
const v3 = new Int16Array(6);
const v6 = new Uint8ClampedArray(5);
f0(...v6, ...v3);
gc();
