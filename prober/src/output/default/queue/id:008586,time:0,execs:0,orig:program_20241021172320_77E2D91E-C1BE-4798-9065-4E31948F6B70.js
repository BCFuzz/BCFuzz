for (let v0 = 0; v0 < 5; v0++) {
}
let v1 = 1e-15;
function f2(a3, a4) {
    try { a3(); } catch (e) {}
    arguments.callee += a3;
    ({"length":v1,} = arguments);
    return arguments;
}
for (let i = 0; i < 10; i++) {
    f2()[1];
}
gc();
