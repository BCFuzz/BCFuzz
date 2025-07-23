function f0() {
    const o1 = {
    };
    return o1;
}
const v4 = ("").toLocaleLowerCase().slice;
v4.toString = f0;
try { v4.apply(v4); } catch (e) {}
gc();
