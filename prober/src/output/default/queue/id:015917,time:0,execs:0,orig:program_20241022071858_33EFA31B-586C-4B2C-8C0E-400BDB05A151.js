function f0() {
    return f0;
}
for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
for (let v11 = 0; v11 < 50; v11++) {
    function f12() {
        return f12;
    }
    f12.toString = f0;
    const o19 = {
        toString(a16, a17) {
            a17.toString(2, "number");
        },
    };
    o19.toString(o19, f12);
    o19.toString(o19, o19);
}
gc();
