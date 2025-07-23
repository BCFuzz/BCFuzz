const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v3 = new v2(v2, v1, v1, v1);
v3.buffer.transfer();
function f6(a7, a8, a9, a10) {
    a7.toSorted();
    return f6;
}
try { f6(v3); } catch (e) {}
gc();
