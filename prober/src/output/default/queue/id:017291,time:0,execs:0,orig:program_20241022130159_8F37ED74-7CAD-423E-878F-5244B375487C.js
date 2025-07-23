const v1 = createGlobalObject();
const v2 = v1.Float16Array;
function f3() {
    return v1;
}
const v4 = new v2();
new Int16Array(v4.map(f3));
gc();
