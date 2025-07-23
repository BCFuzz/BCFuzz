function f0(a1, a2) {
    return a1.caller;
}
([f0]).flatMap(f0);
gc();
