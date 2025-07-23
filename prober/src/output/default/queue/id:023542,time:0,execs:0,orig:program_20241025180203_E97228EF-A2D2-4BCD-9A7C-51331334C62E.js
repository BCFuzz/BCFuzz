function f0() {
    return f0;
}
class C1 extends f0 {
}
const v4 = new Proxy(Array, C1);
for (let i7 = 0, i8 = 10; i7 !== i8; i8--) {
}
for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
}
const t10 = createGlobalObject().Float16Array;
const v28 = new t10();
v28.sort(v4);
gc();
