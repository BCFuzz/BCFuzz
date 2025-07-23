function f1() {
    return -539459698 >> Uint8Array;
}
Uint8Array[Symbol.toPrimitive] = f1;
try { this.decodeURIComponent(Uint8Array); } catch (e) {}
gc();
