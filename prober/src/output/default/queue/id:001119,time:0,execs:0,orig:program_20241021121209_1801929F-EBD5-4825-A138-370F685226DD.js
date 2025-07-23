function f0(a1, a2) {
    return f0;
}
class C4 {
    get c() {
        const o6 = {
            __proto__: this,
            "e": -256,
            14: f0,
        };
    }
}
const v7 = new C4();
const v10 = new BigUint64Array(586);
for (const v11 of v10) {
    v7.c;
}
gc();
