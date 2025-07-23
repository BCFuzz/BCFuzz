function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v5 = 0; v5 < 100; v5++) {
    }
    for (let v6 = 0; v6 < 5; v6++) {
        try { Reflect.ownKeys(a2); } catch (e) {}
    }
}
const v9 = new F0();
new F0(v9);
gc();
