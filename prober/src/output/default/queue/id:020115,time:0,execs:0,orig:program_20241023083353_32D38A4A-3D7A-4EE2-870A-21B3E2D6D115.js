function f1() {
    return ("2147483649").replace("function", "function");
}
for (let v4 = 0; v4 < 10; v4++) {
    f1();
}
gc();
