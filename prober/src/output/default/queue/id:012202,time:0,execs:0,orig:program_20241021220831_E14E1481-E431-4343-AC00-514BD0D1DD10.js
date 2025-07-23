function f0() {
    return f0;
}
for (let v1 = 0; v1 < 50; v1++) {
    function f2(a3, a4) {
        const o5 = {
            __proto__: a3,
        };
        o5.name;
        o5.name = o5;
        return a4;
    }
    f2();
    f2(f0);
}
gc();
