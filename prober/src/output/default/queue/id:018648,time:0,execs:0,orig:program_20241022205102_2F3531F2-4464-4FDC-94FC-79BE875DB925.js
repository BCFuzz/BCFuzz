const o1 = {
};
function f2(a3) {
    return a3;
}
Object.defineProperty(o1, "get", { value: f2 });
const v5 = new Proxy(BigInt64Array, o1);
try { new v5(Proxy); } catch (e) {}
gc();
