const v3 = createGlobalObject().Float16Array;
function f4() {
    return 16;
}
Object.defineProperty(v3, 0, { enumerable: true, get: f4 });
const v5 = new v3(v3);
v5.indexOf(16);
gc();
