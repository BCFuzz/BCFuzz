function f1() {
    return 10;
}
const v2 = [10,10,10,10];
const v3 = [f1,f1,f1,f1];
v3[Symbol.toPrimitive] = f1;
try {
    Object.defineProperty(v2, "length", { enumerable: true, value: v3 });
} catch(e6) {
}
gc();
