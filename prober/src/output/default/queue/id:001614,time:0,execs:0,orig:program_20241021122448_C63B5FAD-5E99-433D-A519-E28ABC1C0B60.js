function f1() {
    return 512;
}
const v3 = new Int8Array();
const v6 = new Uint8Array(2748);
const v8 = [f1];
Reflect.apply(v3.toSorted, v6, v8);
gc();
