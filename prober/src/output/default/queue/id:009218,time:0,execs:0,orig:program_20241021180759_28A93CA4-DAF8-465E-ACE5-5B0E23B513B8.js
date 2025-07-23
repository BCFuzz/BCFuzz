function f0(a1, a2) {
    return a1.bind(f0, f0, a2);
}
for (let i = 0; i < 100; i++) {
    f0(f0);
}
class C5 {
}
gc();
