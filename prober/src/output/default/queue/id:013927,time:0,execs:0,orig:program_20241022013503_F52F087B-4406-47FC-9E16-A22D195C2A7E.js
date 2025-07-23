class C0 {
    valueOf(a2, a3) {
        Math.fround(this);
    }
}
const v6 = new C0();
const v8 = [55133,128,129,1073741824,4294967296,11,2147483648,5,536870912,12];
try { v8.copyWithin("1025765844", v6); } catch (e) {}
gc();
