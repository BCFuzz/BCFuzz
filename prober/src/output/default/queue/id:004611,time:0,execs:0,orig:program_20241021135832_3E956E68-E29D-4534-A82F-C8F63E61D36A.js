const o0 = {
};
function f1(a2) {
    const o11 = {
        n(a4, a5) {
            for (let i = 0; i < 5; i++) {
                for (let v6 = 0; v6 < 250; v6++) {
                    v6++;
                    v6--;
                }
                this[Symbol.toPrimitive] = a2;
            }
            return f1;
        },
    };
    o11.n(o0, a2);
    o11.b = o0;
    return o11;
}
const v13 = f1();
const v14 = f1();
function f15(a16, a17) {
    return a16.n();
}
f15(v13);
const t24 = f15(v14);
t24();
gc();
