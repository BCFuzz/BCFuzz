class C0 {
    toString(a2, a3, a4, a5) {
        this.length = 2147483649;
    }
}
const v7 = new C0();
v7.toString();
try { new Int32Array(v7); } catch (e) {}
gc();
