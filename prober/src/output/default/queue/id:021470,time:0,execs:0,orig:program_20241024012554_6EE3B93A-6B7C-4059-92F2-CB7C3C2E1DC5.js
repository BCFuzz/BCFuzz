function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2() {
        return [F0,F0,F0,F0];
    }
    this.toString = f2;
}
const v4 = new F0();
function f5(a6, a7) {
    a6.length = a6;
    const o8 = {
        __proto__: a7,
    };
    return o8;
}
const v9 = f5(F0, v4);
f5(v9);
const v12 = this.Int16Array;
try { new v12(v9); } catch (e) {}
gc();
