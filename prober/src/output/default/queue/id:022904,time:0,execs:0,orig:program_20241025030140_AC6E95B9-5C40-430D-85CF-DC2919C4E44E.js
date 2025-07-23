function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2() {
        return F0;
    }
    function f3(a4) {
        return f3;
    }
    Object.defineProperty(this, 3558, { get: f2, set: f3 });
}
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = new Int32Array(209);
    const v13 = [v5,v5,v5,v5,v5];
    function f14() {
        const o15 = {
        };
        const v16 = o15.constructor;
        v16.assign(o15, a8);
        return v16;
    }
    const v19 = [f14];
    Reflect.apply(v13.toSorted, v12, v19);
}
new F6(v5);
for (let i25 = 0, i26 = 10; i25 < i26; i26--) {
}
gc();
