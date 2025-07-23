function f1(a2, a3, a4) {
    arguments.length = arguments;
    function f7(a8, a9, a10) {
        a10.valueOf = eval;
        return a2;
    }
    arguments[Symbol.iterator] = BigUint64Array;
    return f7;
}
f1();
gc();
