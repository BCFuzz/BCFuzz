const o20 = {
    toString(a1) {
        for (let i4 = 10, i5 = 10; 1 < i5; i5--) {
        }
        function f12(a13) {
            function f15(a16, a17) {
                return a16;
            }
            f15.bind();
            return arguments;
        }
        f12(f12);
    },
};
function f22(a23, a24, a25, a26) {
    a26 / a26;
    return f22;
}
for (let v28 = 0; v28 < 5; v28++) {
    const t19 = f22(v28, v28, v28, f22);
    t19(o20, 2, v28, o20);
}
gc();
