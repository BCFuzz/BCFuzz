function f1() {
    return 9007199254740992;
}
const v3 = [""];
v3[Symbol.toPrimitive] = f1;
-63376 + v3;
gc();
