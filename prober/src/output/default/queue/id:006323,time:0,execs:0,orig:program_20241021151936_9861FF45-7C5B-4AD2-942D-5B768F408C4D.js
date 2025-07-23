function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const o5 = {
    };
    Reflect.ownKeys(o5);
}
const v8 = new F0();
const v9 = new F0();
new F0(v8, v9, v9);
gc();
