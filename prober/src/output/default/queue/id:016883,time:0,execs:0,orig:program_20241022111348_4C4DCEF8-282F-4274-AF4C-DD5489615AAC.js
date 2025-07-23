for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
class C10 {
    4294967295;
}
const v11 = new C10();
class C12 extends C10 {
}
new C12();
const v14 = new C12();
const v15 = v14.constructor;
const v16 = new v15(C10, v15, v14, C10, v14);
const v17 = v16.constructor;
new v17(v15, v17);
const v19 = new C12();
const t15 = v19.constructor;
new t15();
const v22 = new C12();
const v23 = v22.constructor;
const v24 = new v23(v23, v16, v14, v11, v23);
class C26 extends v24.constructor {
}
new C26();
for (let v28 = 0; v28 < 500; v28++) {
    v28++;
    v28--;
}
gc();
