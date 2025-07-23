async function* f1(a2, a3) {
    return yield await Map;
}
f1(f1, Map).next();
gc();
