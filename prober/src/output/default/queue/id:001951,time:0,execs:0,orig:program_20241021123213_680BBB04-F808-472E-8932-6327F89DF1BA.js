function f1() {
    arguments.length **= 8;
    return arguments;
}
f1();
gc();
