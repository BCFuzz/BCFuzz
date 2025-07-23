function f1() {
    function f5() {
        arguments.length **= 8;
        return arguments;
    }
    f5();
    const o8 = {
        [Infinity]: f1,
        "c": "valueOf",
    };
    return o8;
}
const v9 = f1();
v9.Infinity(f1, v9, f1, f1, v9);
const t13 = v9.Infinity;
t13();
gc();
