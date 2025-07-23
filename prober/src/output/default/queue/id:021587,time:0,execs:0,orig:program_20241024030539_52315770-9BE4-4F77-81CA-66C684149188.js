function f0() {
    const v1 = [f0];
    return /e[\d-\d](L*)/md.compile(v1);
}
f0();
gc();
