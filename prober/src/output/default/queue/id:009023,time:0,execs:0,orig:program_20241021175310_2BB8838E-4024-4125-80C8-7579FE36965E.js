const v1 = Array();
function f2() {
    return f2;
}
Object.defineProperty(v1, 4, { configurable: true, get: f2 });
v1.indexOf(v1, Array);
gc();
