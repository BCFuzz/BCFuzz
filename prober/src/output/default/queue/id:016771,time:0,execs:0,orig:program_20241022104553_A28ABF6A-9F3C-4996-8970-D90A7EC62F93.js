for (let v0 = 0; v0 < 250; v0++) {
    const v3 = new Set();
    const v6 = new Int8Array(2147483648);
    const v8 = new Date();
    try { v8.setUTCHours(1000, v3, v6); } catch (e) {}
}
gc();
