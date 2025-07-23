function f2(a3, a4) {
    const o5 = {
        [a4]: 7,
    };
    return o5;
}
const v6 = f2();
for (let v7 = 0; v7 < 32; v7++) {
    function F8() {
        if (!new.target) { throw 'must be called with new'; }
        function f10(a11) {
            return this;
        }
        Object.defineProperty(v6, "c", { configurable: true, set: f10 });
        this.h = F8;
    }
    const v12 = new F8();
    const t17 = v12.h;
    new t17(v12);
}
f2(20266, v6);
gc();
