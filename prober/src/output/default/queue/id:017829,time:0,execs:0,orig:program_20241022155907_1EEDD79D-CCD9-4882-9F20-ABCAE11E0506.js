for (let v0 = 0; v0 < 50; v0++) {
    function f1(a2) {
        a2.caller;
        return arguments;
    }
    f1(f1);
    for (let i = 0; i < 50; i++) {
    }
}
gc();
