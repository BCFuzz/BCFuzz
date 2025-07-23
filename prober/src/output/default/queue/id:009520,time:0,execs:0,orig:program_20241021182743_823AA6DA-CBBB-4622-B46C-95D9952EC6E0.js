const o0 = {
};
function f1() {
    return o0;
}
f1.toString = f1;
try { this.escape(f1); } catch (e) {}
gc();
