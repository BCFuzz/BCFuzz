function f0() {
    ("a").substring().length;
    return f0;
}
for (let i = 0; i < 10; i++) {
    f0();
}
gc();
