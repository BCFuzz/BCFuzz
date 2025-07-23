class C0 {
}
const v1 = new C0();
const v2 = v1.constructor;
const v3 = new v2(v2, C0, C0, v2, v2);
for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
}
for (let v14 = 0; v14 < 5; v14++) {
    const o18 = {
        __proto__: null,
        [null]() {
            super[v3];
        },
    };
    try { o18.null(o18, null); } catch (e) {}
}
gc();
