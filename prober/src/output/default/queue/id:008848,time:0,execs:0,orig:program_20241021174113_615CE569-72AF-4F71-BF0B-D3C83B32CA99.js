async function* f0(a1, a2) {
    return f0;
}
f0().next();
drainMicrotasks();
gc();
