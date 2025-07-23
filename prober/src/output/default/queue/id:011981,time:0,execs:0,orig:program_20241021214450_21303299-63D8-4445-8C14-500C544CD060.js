function f0() {
    return f0;
}
f0();
f0();
function f3() {
    return f0;
}
for (let v4 = 0; v4 < 250; v4++) {
    function f5() {
        return arguments;
    }
    f5();
    const t12 = [f5,f5];
    t12.constructor = f3;
}
gc();
