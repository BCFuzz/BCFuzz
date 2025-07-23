const v1 = new Uint8ClampedArray();
const o2 = {
};
o2.toPrimitive = v1;
for (let v3 = 0; v3 < 10; v3++) {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
        o2.toPrimitive;
        function f7(a8) {
        }
        Object.defineProperty(o2, "c", { configurable: true, set: f7 });
    }
    new F4();
}
gc();
