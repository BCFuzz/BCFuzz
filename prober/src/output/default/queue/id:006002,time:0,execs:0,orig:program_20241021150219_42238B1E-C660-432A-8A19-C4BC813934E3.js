class C1 {
}
function f2(a3) {
    return -1000000.0;
}
Object.defineProperty(C1, "toString", { configurable: true, value: f2 });
const v5 = new Int16Array();
v5.subarray(v5, C1);
const v9 = ("").toLocaleLowerCase().includes;
try { v9.call(); } catch (e) {}
gc();
