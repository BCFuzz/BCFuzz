const v2 = new Float64Array([1073741824,-2098715284,9007199254740990,-4788,8,16,-536870912,-15020,268435441,-536870912]);
function f3(a4, a5) {
    const v8 = new Int32Array(v2.buffer);
    return v8.set(v2);
}
Object.defineProperty(v2, "valueOf", { writable: true, enumerable: true, value: f3 });
const v11 = new Uint32Array();
v11.slice(v2);
gc();
