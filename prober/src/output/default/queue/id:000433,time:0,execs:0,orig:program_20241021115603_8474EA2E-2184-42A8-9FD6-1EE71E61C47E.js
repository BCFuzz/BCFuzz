function f0() {
}
try { ("h").trimEnd(); } catch (e) {}
[] = "e";
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = "h";
}
const v7 = new F4(f0);
const v8 = new F4(v7);
new F4(v8);
function f16(a17, a18, a19, a20) {
    const o21 = {
        [a17]: f0,
        ..."function",
    };
    return o21;
}
const v22 = f16("fill", "e", "function", "function");
f16("e", "function", v22, "fill");
f16(v22, "function", "h", "function");
gc();
