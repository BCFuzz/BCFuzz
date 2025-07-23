function f1() {
    function* f3(a4, a5) {
        ("log").acosh(arguments);
        return arguments;
    }
    f3("log", f1);
    function f8() {
        return f1;
    }
    const v9 = f8.apply(f8, arguments);
    try { v9(f1); } catch (e) {}
    return f3;
}
f1();
gc();
