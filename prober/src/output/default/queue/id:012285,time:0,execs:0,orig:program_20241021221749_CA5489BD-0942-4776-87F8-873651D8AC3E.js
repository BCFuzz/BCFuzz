function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v5 = 0; v5 < 10; v5++) {
        for (let i = 0; i < 5; i++) {
            const v11 = Date();
            const v12 = [1064440774,"undefined"];
            Reflect.apply(("asyncIterator").padStart, v11, v12);
        }
    }
}
const v15 = new F0(F0, F0, F0);
const v16 = new F0();
new F0(v15, v16, v16);
gc();
