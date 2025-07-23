function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a5;
}
const v6 = new F2(1n, 1565512247n);
-v6.b;
gc();
