class C1 {
    4 = 1073741823;
}
const v2 = new C1();
v2[4] = v2;
const v3 = new C1();
this.constructor.assign(v2, v3);
gc();
