const v2 = createGlobalObject().Float16Array;
const v3 = new v2();
function f4() {
    return v2;
}
Object.defineProperty(v3, "constructor", { value: f4 });
gc();
