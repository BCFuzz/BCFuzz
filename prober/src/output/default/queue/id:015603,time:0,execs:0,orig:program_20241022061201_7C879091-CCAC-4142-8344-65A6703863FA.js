function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2() {
        return f2;
    }
    function f3(a4) {
        return a4;
    }
    Object.defineProperty(this, "h", { get: f2, set: f3 });
}
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = new Int32Array(209);
    const v13 = [F0,F0,F0,F0,F0];
    function f14() {
        const o15 = {
        };
        return o15.constructor.assign(o15, a8);
    }
    const v19 = [f14];
    Reflect.apply(v13.toSorted, v12, v19);
}
new F6(v5);
gc();
