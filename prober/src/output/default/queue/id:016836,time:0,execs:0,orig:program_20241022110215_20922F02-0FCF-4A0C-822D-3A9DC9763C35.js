function f0() {
    const o1 = {
    };
    return o1;
}
function f2(a3, a4) {
    return f0;
}
const o11 = {
    set b(a6) {
        for (let v7 = 0; v7 < 5; v7++) {
            ("p" + v7).replace("p", f2);
        }
    },
};
o11.b = o11;
gc();
