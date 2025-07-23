for (let v1 = 0; v1 < 5; v1++) {
    const t1 = -37792;
    t1[-37792] = v1;
}
let v2 = 1e-15;
function f3(a4, a5) {
    arguments.callee += a5;
    ({"length":v2,} = arguments);
    return arguments;
}
for (let i = 0; i < 10; i++) {
    f3(f3, f3);
}
gc();
