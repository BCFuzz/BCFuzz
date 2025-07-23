const v2 = new Float64Array(Float64Array, Int16Array);
class C3 {
    f = Int16Array;
}
const v4 = new C3();
const v5 = new C3();
delete v5.f;
v5[Float64Array] = v4.valueOf();
new Float64Array(v2);
gc();
