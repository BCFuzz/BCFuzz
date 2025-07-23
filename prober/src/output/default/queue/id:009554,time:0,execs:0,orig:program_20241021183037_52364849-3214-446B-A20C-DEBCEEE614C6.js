const o2 = {
    "maxByteLength": 1024,
};
const v4 = new SharedArrayBuffer(127, o2);
const v6 = new Int32Array(v4);
class C7 {
    toString(a9) {
        this.length;
    }
}
const v11 = new C7();
const v13 = [Reflect,Reflect,Reflect,Reflect];
Reflect.apply(v11.toString, v6, v13);
gc();
