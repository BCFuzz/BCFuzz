function* f1(a2, a3, a4, a5) {
    return a2;
}
const v8 = f1("9007199254740991", "9007199254740991", f1, "9007199254740991").next.constructor;
const v9 = v8();
const v11 = new Uint16Array(v9, v9, v8);
v11.subarray(v9, "9007199254740991");
gc();
