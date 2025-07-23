const v2 = new Uint16Array(7);
function f4() {
    return v2["sort"](f4);
}
Object.defineProperty(Int16Array, 2, { configurable: true, enumerable: true, get: f4 });
try { new Int16Array(Int16Array); } catch (e) {}
gc();
