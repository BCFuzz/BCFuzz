function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 12;
}
class C3 extends F0 {
}
const v4 = new C3();
const v6 = new SharedArrayBuffer();
function f7() {
    gc();
    for (let v10 = 0; v10 < 5; v10++) {
        const o11 = {
        };
        o11.constructor.entries(v4);
    }
    return v4;
}
v6[Symbol.toPrimitive] = f7;
try { new Int32Array(v6, 11, v6); } catch (e) {}
gc();
