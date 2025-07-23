const o7 = {
    n(a1, a2, a3) {
        const v4 = this;
        return v4.Intl.DisplayNames;
    },
};
const v8 = o7.n;
v8(o7, v8, o7);
for (let v12 = 0; v12 < 25; v12++) {
    function F13() {
        if (!new.target) { throw 'must be called with new'; }
        function f15(a16) {
            new Float64Array(58766);
            return 58766;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f15 });
        this.h = F13;
        this.c = -256;
    }
    new F13();
    const v20 = new F13();
    const t21 = v20.h;
    new t21(58766, v8);
}
gc();
