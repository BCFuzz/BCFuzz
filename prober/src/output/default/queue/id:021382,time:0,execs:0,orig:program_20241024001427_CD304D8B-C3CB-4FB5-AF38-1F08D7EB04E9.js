class C1 {
}
Object.defineProperty(C1, 3, { writable: true, value: 1000000.0 });
function f3(a4, a5, a6) {
    function f7() {
        return a6;
    }
    function f8(a9) {
        return f8;
    }
    Object.defineProperty(a5, 3, { enumerable: true, get: f7, set: f8 });
    return 1000000.0;
}
try { f3(65536, C1); } catch (e) {}
gc();
