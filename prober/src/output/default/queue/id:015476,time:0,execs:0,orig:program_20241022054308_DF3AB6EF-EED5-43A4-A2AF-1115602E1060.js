const v2 = new Int32Array(DataView);
const v3 = v2.toSorted(DataView);
function f4(a5, a6, a7, a8) {
    function f10() {
        return DataView;
    }
    function f11(a12) {
        return arguments;
    }
    Object.defineProperty(arguments, 2, { enumerable: true, get: f10, set: f11 });
    arguments[2];
    return a8;
}
v3.map(f4);
gc();
