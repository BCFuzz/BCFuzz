for (let i = 0; i < 5; i++) {
    try {
    const t0 = 1024;
    t0(1024, 1024);
    } catch (e) {}
}
gc();
