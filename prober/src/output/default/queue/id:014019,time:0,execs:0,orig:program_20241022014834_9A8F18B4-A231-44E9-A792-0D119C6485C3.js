const v2 = new Uint8Array(210);
for (const v3 of v2) {
    class C5 {
    }
    function f6() {
        return Uint8Array;
    }
    Object.defineProperty(C5, "string", { enumerable: true, get: f6 });
    "string" in C5;
}
gc();
