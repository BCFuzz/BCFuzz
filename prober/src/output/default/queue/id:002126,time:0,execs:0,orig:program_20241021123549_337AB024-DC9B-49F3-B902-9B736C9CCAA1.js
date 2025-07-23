function f1() {
    return 3;
}
RegExp[Symbol.match] = f1;
try { RegExp(RegExp, 3); } catch (e) {}
gc();
