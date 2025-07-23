class C0 {
}
const v1 = new C0();
const o2 = {
};
const v4 = new Proxy(v1, o2);
const v5 = v4.toString();
for (let v6 = 0; v6 < 10; v6++) {
    const v8 = new Set(v5);
    const v9 = v8.union(v8);
    v9.isSupersetOf(v9);
}
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
gc();
