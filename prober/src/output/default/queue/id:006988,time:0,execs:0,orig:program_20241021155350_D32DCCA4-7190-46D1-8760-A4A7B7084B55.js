function f1() {
    return 9007199254740992n;
}
("-1").toLocaleLowerCase().replace("-1", f1);
gc();
