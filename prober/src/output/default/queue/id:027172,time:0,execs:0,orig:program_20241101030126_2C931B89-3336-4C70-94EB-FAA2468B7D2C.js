class C0 {
}
const v1 = new C0();
const v2 = v1.constructor;
const v3 = new v2();
for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
}
const o17 = {
    __proto__: null,
    [null]() {
        super[v3];
    },
};
try { o17.null(v2, v2, null, v1); } catch (e) {}
gc();
