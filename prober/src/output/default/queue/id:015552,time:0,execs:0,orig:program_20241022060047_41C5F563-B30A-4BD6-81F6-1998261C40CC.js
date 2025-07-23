function f0() {
    f0 >>>= f0;
    return f0;
}
const v2 = f0().name;
const t5 = /9(?!a)?a/gs.constructor;
t5.multiline = v2;
gc();
