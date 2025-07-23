for (let i = 0; i < 10; i++) {
    const v1 = new ArrayBuffer();
    new DataView(v1);
}
gc();
