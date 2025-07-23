function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
function f5() {
    const v7 = [Int16Array,Int16Array,Int16Array];
    const o8 = {
    };
    o8.get = f5;
    const v10 = new Proxy(v7, o8);
    new Int16Array(v10);
    return f5;
}
v4.constructor = f5;
const v12 = v4.constructor;
try { v12(v4, v12, v12, f5); } catch (e) {}
for (let i16 = -3, i17 = 10; i16 < i17; i17--) {
}
gc();
