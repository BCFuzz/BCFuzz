function f0() {
    const o1 = {
    };
    return o1;
}
const v4 = new Uint16Array();
v4[Symbol.toPrimitive] = f0;
try { v4.set("c", v4); } catch (e) {}
gc();
