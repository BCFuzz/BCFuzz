const v2 = new Int16Array();
const o3 = {
};
function f4() {
    function f5(a6, a7) {
        return 0.5080451558029994;
    }
    return f5;
}
function f9(a10) {
    return a10;
}
Object.defineProperty(o3, "set", { configurable: true, enumerable: true, get: f4, set: f9 });
const v12 = new Proxy(v2, o3);
v12[10] = 3826;
gc();
