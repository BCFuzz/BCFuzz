function f1(a2) {
    return this.constructor.is(1000000000.0);
}
const v8 = new Int16Array(1055);
v8.sort(f1);
gc();
