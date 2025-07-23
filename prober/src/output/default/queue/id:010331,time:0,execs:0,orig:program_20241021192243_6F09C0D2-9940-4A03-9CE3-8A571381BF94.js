const o1 = {
    get d() {
        this.f = this;
        return this;
    },
};
function f2() {
    return o1;
}
function f3(a4) {
    const v7 = new Uint32Array(1000);
    for (const v8 in v7) {
        function f9(a10, a11, a12, a13) {
            const v14 = [];
            function f15() {
                v14["toSpliced"]();
                return v14;
            }
            return arguments;
        }
        f9();
    }
    return f2;
}
Object.defineProperty(o1, "f", { enumerable: true, get: f2, set: f3 });
const o20 = {
    ...o1,
};
gc();
