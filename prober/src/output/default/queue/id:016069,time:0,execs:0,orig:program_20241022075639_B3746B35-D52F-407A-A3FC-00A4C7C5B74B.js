const o3 = {
    p(a1, a2) {
        return a1;
    },
};
const v5 = new Float32Array();
for (const v6 in o3) {
    const o7 = {
    };
    function f8() {
        return o3;
    }
    function f9(a10) {
        const v11 = v5.fill;
        try { v11.call(a10); } catch (e) {}
        return a10;
    }
    Object.defineProperty(o7, "a", { configurable: true, enumerable: true, get: f8, set: f9 });
    o7.a = v6;
}
gc();
