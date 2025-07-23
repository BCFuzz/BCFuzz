function f1(a2) {
    const v6 = this.constructor.is(NaN, a2);
    return v6 && v6;
}
f1.call();
const v10 = new Int16Array(1055);
v10.filter(f1);
gc();
