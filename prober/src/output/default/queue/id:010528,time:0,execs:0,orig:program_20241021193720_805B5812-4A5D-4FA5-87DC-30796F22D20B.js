let v1 = new WeakMap();
function f2() {
    const v4 = ~-9223372036854775808;
    v4 | (f2 + v4);
    ++v1;
    return f2;
}
v1.toString = f2;
const v9 = ["14",v1];
try { v9.slice(v9); } catch (e) {}
gc();
