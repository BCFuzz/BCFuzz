const v1 = new Set();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7) {
        function f8(a9, a10, a11) {
            const o12 = {
            };
            return o12;
        }
        const v13 = f8(f8, Set, a7);
        return f8().constructor.getOwnPropertySymbols(v13);
    }
    Object.defineProperty(this, "f", { enumerable: true, set: f6 });
    this.f = v1;
}
new F2();
new F2();
gc();
