const v2 = new Float32Array(178);
function f3(a4, a5) {
    arguments.callee += a5;
    return v2;
}
for (let v9 = 0; v9 < 25; v9++) {
    f3(0.0, 1107, v9++, ...v2);
}
gc();
