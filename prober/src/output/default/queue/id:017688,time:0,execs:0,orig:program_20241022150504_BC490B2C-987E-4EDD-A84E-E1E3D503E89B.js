let v1 = Float64Array;
function f2() {
    return 2;
}
v1.valueOf = f2;
const v5 = ReferenceError(2);
const v7 = new Uint8ClampedArray(v1, ++v1);
v7.name = v1;
const v9 = [ReferenceError,ReferenceError,ReferenceError];
Reflect.apply(v5.toString, v7, v9);
gc();
