const v1 = new Float64Array(Float64Array);
function f2() {
    function f3(a4, a5) {
        return delete v1[14];
    }
    return f3;
}
function f7(a8) {
    return a8;
}
Object.defineProperty(v1, "constructor", { get: f2, set: f7 });
v1.buffer.transfer();
const t11 = v1.constructor;
t11();
gc();
