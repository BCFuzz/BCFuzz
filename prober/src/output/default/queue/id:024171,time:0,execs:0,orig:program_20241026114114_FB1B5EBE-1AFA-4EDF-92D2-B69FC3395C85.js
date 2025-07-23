const v1 = new WeakMap();
const v3 = Date();
const o7 = {
    [v3](a5, a6) {
    },
    "h": Date,
    "a": v1,
};
class C8 {
}
const v9 = new C8();
const v11 = new Uint32Array();
const o14 = {
    [true]: true,
    "b": true,
    "d": v9,
    [v11]: true,
    get c() {
        return v1;
    },
    ...o7,
};
for (let v15 = 0; v15 < 5; v15++) {
    for (const v16 in o14) {
        v16 in o14;
    }
}
gc();
