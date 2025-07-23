function f0() {
    const o1 = {
    };
    return o1;
}
const v2 = f0();
v2[Symbol.toPrimitive] = f0;
const v6 = ("number").charAt;
try { v6.call(v2); } catch (e) {}
gc();
