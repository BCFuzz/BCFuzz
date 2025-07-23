class C1 {
    2 = 1.0;
}
const v2 = new C1();
this.constructor.freeze(v2);
gc();
