const v1 = new Float64Array();
function f2() {
    function f3() {
        const o6 = {
            "maxByteLength": 11,
        };
        const v8 = new ArrayBuffer(11, o6);
        const v10 = new Uint16Array(v8);
        v10.sort();
        return f2;
    }
    return f3;
}
function f12(a13) {
    return a13;
}
Object.defineProperty(v1, "valueOf", { configurable: true, get: f2, set: f12 });
v1[312] = v1;
gc();
