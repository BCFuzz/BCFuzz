function f0() {
    return f0;
}
function f1() {
    const o2 = {
        __proto__: f1,
        ...f1,
    };
    return f1;
}
f1();
for (let v4 = 0; v4 < 100; v4++) {
    function f6(a7, a8) {
        const o9 = {
            __proto__: a7,
        };
        Float32Array.from(o9);
        return f0;
    }
    f6(f6(Date));
}
gc();
