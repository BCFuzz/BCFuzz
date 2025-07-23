const v1 = Error(Error);
let v3 = new WeakMap();
function f4() {
    delete v1.stack;
    return ++v3;
}
v3.toString = f4;
const v8 = ["14",v3];
try { v8.slice(v8); } catch (e) {}
gc();
