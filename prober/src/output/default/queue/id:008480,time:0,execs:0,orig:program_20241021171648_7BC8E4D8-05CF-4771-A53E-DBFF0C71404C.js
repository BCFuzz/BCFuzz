for (let v0 = 0; v0 < 5; v0++) {
    const v4 = ArrayBuffer.bind("string", 176, v0);
    try { v4.call(); } catch (e) {}
}
gc();
