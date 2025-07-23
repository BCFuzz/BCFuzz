function f0() {
    return f0;
}
const v1 = [f0,f0];
const v2 = [v1];
for (let v5 = 0; v5 < 5; v5++) {
    const v6 = new Float64Array(v1);
    f0(...v6, ...v2, 8, ...v6);
}
for (let i = 0; i < 5; i++) {
    for (let v8 = 0; v8 < 50; v8++) {
    }
}
gc();
