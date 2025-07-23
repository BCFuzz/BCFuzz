function f1(a2) {
    const v6 = this.constructor.is(1000000000.0, a2);
    return v6 && v6;
}
const v9 = new Int16Array(1055);
v9.toString = f1;
try { v9.toString(); } catch (e) {}
v9.sort(f1);
gc();
