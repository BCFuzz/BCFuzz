function f1() {
    return 4n;
}
("f").replace("f", f1);
gc();
