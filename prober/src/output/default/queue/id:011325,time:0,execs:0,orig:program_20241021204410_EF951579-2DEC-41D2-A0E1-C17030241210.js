const v2 = Array(Array);
function f4(a5) {
    const v8 = new Float32Array(3);
    return v8.lastIndexOf(1000000000.0);
}
Reflect.valueOf = f4;
const v10 = [Reflect];
Reflect.apply(v2.copyWithin, v2, v10);
gc();
