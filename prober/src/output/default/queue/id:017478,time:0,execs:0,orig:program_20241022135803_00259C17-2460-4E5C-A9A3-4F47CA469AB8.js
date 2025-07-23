function f2(a3, a4) {
    return 9007199254740990;
}
createGlobalObject.toString = f2;
const v5 = createGlobalObject();
const v6 = v5.g;
const t5 = v5.Float16Array;
const v8 = new t5();
v8.subarray(v6, createGlobalObject);
gc();
