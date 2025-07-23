const v1 = createGlobalObject();
const v2 = v1.Float16Array;
class C3 extends v2 {
}
const v4 = new C3();
v4.subarray(v4, v4, C3, v1, v2);
gc();
