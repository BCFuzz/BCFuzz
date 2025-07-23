try {
    Int32Array.prototype %= 7;
} catch(e2) {
    e2.__proto__.toLocaleString();
}
gc();
