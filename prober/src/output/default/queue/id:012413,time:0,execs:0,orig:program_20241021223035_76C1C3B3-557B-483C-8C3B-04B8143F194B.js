function f1() {
    return "-2117666547";
}
Float64Array.valueOf = f1;
const v3 = Float64Array.of();
v3.slice(v3, Float64Array);
gc();
