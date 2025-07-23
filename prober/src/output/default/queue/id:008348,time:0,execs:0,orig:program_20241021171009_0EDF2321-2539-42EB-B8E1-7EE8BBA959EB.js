const v1 = ["b","b","b","b"];
function f3(a4, a5) {
    const v7 = [a5,a5,a5];
    return Reflect.apply(("b").matchAll, v1, v7);
}
Float64Array[Symbol.iterator] = f3;
new Float64Array(Float64Array);
gc();
