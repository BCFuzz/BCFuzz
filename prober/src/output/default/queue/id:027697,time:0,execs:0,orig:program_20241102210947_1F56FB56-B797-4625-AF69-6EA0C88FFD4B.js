function f0() {
    return f0;
}
class C1 extends f0 {
}
for (let v2 = 0; v2 < 50; v2++) {
    function f3(a4) {
        const t7 = [v2];
        t7[1] = -4294967297;
        return arguments;
    }
    f3();
    for (let i = 0; i < 5; i++) {
    }
}
gc();
