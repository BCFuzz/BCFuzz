function f2(a3) {
    this.constructor.is("c", a3);
}
const v8 = new Int16Array(1055);
v8.filter(f2);
gc();
