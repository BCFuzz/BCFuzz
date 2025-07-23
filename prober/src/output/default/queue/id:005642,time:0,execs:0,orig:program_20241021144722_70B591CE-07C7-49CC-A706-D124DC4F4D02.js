function f0(a1, a2) {
    arguments.callee += a2;
    ({"length":a1,} = arguments);
    for (let [i8, i9] = (() => {
            eval();
            return [0, 10];
        })();
        i8 < i9;
        i9--) {
    }
    return arguments;
}
for (let i = 0; i < 10; i++) {
    const v16 = f0(f0);
    v16[0] = v16;
}
gc();
