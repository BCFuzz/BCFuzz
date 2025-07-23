function f0(a1, a2) {
    arguments.length;
    +arguments;
    return arguments;
}
for (let v6 = 0; v6 < 10; v6++) {
    f0();
}
gc();
