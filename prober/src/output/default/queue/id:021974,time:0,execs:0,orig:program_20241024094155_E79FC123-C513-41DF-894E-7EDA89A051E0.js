class C2 {
    3060 = 5;
    g = 10;
}
const v3 = new C2();
const v5 = new Uint32Array(v3);
const o9 = {
    [true]: true,
    "h": true,
    "b": true,
    "a": null,
    "e": true,
    [v5]: true,
    get c() {
        return this;
    },
    __proto__: v3,
};
for (let v10 = 0; v10 < 5; v10++) {
    for (const v11 in o9) {
        v11 in o9;
    }
}
gc();
