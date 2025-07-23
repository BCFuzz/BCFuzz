function f1() {
    ("a").substring("a", "f");
    return "a";
}
for (let i = 0; i < 10; i++) {
    f1();
}
gc();
