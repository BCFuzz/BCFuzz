const o2 = {
    [undefined]: 7,
};
for (let v3 = 0; v3 < 32; v3++) {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
        function f6(a7) {
            return a7;
        }
        Object.defineProperty(o2, "c", { configurable: true, set: f6 });
        this.h = F4;
    }
    const v8 = new F4();
    const t13 = v8.h;
    new t13();
}
function f11(a12, a13) {
    o2[o2] = a12;
    return a12;
}
new Promise(f11);
gc();
