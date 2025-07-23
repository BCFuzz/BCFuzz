function f1(a2, a3) {
    function f5() {
        return a2;
    }
    return arguments;
}
const t6 = f1();
delete t6[5n];
gc();
