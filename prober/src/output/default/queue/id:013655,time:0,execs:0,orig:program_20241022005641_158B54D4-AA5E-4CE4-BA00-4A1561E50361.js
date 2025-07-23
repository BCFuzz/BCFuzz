function f1(a2) {
    this.constructor.is(1000000000.0, a2);
    return Int16Array;
}
const v8 = new Int16Array(1055);
v8.sort(f1);
gc();
