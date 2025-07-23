function f0() {
    return f0;
}
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
function f7() {
    return f7;
}
function f8() {
    return f8;
}
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
}
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
}
function f21() {
    return F1;
}
function F22(a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
}
function f27() {
    return f7;
}
function f28() {
    return f21;
}
function f29(a30, a31, a32, a33) {
    return F15;
}
function F34() {
    if (!new.target) { throw 'must be called with new'; }
}
function F36(a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
}
function f40(a41, a42) {
    const o43 = {
        ...a41,
        "c": a41,
    };
    return F1;
}
for (let v45 = 0; v45 < 10; v45++) {
    f40(this);
}
gc();
