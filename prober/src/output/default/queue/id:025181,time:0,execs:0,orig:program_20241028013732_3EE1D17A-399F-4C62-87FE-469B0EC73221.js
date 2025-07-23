const v1 = new BigInt64Array();
const v4 = new Int32Array(681);
function f5(a6, a7, a8, a9) {
    function f10() {
        const v13 = Math.clz32(a7);
        function f14() {
            return v13;
        }
        f14.apply(BigInt64Array, arguments);
        return v13;
    }
    f10();
    return a6;
}
f5(v1, v1);
v4.map(f5);
gc();
