const v2 = new Int32Array();
function f3(a4, a5) {
    Math.sin(6 && a4);
    return v2;
}
Object.defineProperty(v2, "constructor", { writable: true, value: f3 });
const v9 = v2.constructor;
v9(f3, v9);
gc();
