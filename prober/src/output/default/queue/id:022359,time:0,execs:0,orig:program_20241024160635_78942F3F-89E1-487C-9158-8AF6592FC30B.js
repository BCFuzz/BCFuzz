function f0(a1, a2) {
    return a2;
}
class C3 extends f0 {
}
const v4 = new C3();
class C5 {
}
const v6 = new C5();
const o7 = {
};
const v9 = new Proxy(v6, o7);
v9[Symbol.toStringTag] = v4;
for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
}
for (let v22 = 0; v22 < 5; v22++) {
    const o23 = {
    };
    o23.constructor.keys(v9);
}
gc();
