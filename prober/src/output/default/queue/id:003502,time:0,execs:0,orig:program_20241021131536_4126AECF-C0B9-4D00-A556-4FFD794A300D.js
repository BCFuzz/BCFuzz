function f3(a4, a5, a6, a7) {
    try { a6(1n); } catch (e) {}
    return a4 << -2.0;
}
f3(-399918739, -399918739, f3);
gc();
