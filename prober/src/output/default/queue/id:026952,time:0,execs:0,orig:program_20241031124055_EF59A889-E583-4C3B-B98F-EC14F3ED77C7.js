for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const o19 = {
    toString(a11) {
        function f12(a13) {
            function f14() {
                return this;
            }
            ("f").replace("f", f14);
            return arguments;
        }
        f12();
        return this;
    },
};
function f20(a21, a22, a23, a24) {
    o19.toString();
    return f20;
}
for (let v26 = 0; v26 < 5; v26++) {
    const v27 = f20();
    v27(v27, v27, f20, v26);
}
gc();
