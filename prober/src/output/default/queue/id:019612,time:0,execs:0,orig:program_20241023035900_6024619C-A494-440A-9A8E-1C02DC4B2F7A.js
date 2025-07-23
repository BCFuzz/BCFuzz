const v0 = [0.6528837706527821,8.496129023940874,8.912168992067027,-3.5594057356961084,0.7076266168659874,-7.536863317463538e+307,5.0];
const o1 = {
};
const v3 = new Proxy(v0, o1);
for (let i6 = -3, i7 = 10;
    (() => {
        const o9 = {
            get h() {
                this.get = v3;
                return this;
            },
        };
        const o10 = {
        };
        const v11 = o10.constructor;
        try { v11.defineProperties(v3, o9); } catch (e) {}
        return i6 < i7;
    })();
    i7--) {
}
gc();
