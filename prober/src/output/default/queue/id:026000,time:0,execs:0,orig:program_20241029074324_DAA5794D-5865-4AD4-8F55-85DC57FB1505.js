const o2 = {
    "g": undefined,
    "d": 4294967295n,
};
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = new Uint8Array(209);
    const v10 = [v9,v9,v9,v9];
    function f11() {
        const o12 = {
        };
        o12.constructor.assign(o12, a5);
        return this;
    }
    delete o2.g;
    const v17 = [f11];
    Reflect.apply(v10.toSorted, v9, v17);
}
const v20 = new F3(o2, F3);
const t19 = v20.constructor;
new t19(o2);
for (let i25 = 0, i26 = 10; i25 < i26; i26--) {
}
gc();
