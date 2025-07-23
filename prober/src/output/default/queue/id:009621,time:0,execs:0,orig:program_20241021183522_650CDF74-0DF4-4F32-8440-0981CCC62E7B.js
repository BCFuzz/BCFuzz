function f0() {
    return f0;
}
function f2() {
    return f0;
}
Error.toString = f2;
try { this.parseInt(Error); } catch (e) {}
gc();
