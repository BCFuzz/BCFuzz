const v2 = new Int32Array();
const v4 = new Int32Array(209);
function f5() {
    const v6 = Array(209);
    function f7(a8) {
        const v12 = new BigInt64Array();
        v12.fill(1073741823n, "hRyH", a8);
        return "hRyH";
    }
    Object.defineProperty(v6, "valueOf", { writable: true, configurable: true, value: f7 });
    return Math.log1p(v6);
}
const v17 = [f5];
Reflect.apply(v2.toSorted, v4, v17);
gc();
