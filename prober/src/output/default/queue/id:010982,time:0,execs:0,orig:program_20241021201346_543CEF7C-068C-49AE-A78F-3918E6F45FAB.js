function f0() {
    const o2 = {
        ["valueOf"]: "valueOf",
    };
    return o2;
}
const v3 = f0();
const v4 = f0();
function f5(a6) {
    a6.valueOf = a6;
    return v4;
}
f5(f0);
f5(v3);
f5(v4);
const v12 = new Float32Array(1024);
for (const v13 in v12) {
}
gc();
