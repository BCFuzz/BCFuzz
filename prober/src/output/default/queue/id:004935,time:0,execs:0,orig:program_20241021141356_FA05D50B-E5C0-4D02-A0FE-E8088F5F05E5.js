class C0 {
}
const v1 = new C0();
const v3 = new Int16Array(C0);
const v4 = new Int16Array(C0, v1, v1);
const v6 = [v4];
Reflect.apply(v4.copyWithin, v3, v6).fill().set(v1);
gc();
