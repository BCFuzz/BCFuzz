const v2 = new Int16Array(256);
const o4 = {
    65536: Int32Array,
    ...v2,
};
class C5 {
}
const v6 = new C5();
const v8 = this.constructor;
v8.assign(v6, v8, o4);
gc();
