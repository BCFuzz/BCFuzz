class C1 {
}
let v2 = 1073741823;
const v4 = +(--v2);
const v5 = new C1();
class C6 {
    f;
    #b = v5;
    [4294967296] = v4;
}
const v7 = new C6();
const v8 = new C6();
this.constructor.assign(v7, v8);
gc();
