class C1 {
    static toString(a3, a4, a5) {
        return -1000.0;
    }
}
const v8 = createGlobalObject().Float16Array;
v8[1] = C1;
new v8(v8);
gc();
