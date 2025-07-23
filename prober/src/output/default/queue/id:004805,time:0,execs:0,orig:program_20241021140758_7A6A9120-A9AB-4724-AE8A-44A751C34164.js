const v3 = new Int32Array(3459);
class C4 {
}
const v5 = new C4();
v5.length = 128;
v3["set"](v5);
gc();
