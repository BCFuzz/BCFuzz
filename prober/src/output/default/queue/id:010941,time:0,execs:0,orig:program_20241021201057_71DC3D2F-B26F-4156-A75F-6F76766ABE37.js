function f2(a3) {
    return 3.0;
}
WeakMap.toString = f2;
([-9007199254740992,13,9,6,-55224,256,512,-1,268435441,2147483647])[5].__proto__.toExponential(WeakMap);
gc();
