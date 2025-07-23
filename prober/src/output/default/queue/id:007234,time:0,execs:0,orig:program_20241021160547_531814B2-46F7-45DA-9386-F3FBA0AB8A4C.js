function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = this.constructor;
    try { new v3(); } catch (e) {}
}
const v5 = new F1();
v5.h = v5;
const v8 = new Int8Array(255);
for (const v9 in v8) {
    const v11 = [v9,v9,v9];
    Reflect.apply(Array.of, v5, v11);
}
gc();
