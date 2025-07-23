for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
class C11 {
}
const v12 = new C11();
v12.constructor = fullGC;
const v13 = v12.constructor;
v13.UTC = v12;
const v14 = v13.UTC;
try { v14(v14, fullGC, C11, v14, C11); } catch (e) {}
gc();
