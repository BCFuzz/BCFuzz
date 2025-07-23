let v1 = 1e-15;
function f2(a3, a4) {
    arguments.callee += a4;
    ({"length":v1,} = arguments);
    return v1;
}
f2(-1e-15);
gc();
