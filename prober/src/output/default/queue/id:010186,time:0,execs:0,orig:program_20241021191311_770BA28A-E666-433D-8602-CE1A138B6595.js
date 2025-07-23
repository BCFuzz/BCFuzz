function f1() {
    delete arguments[65535];
    delete arguments[1024];
    return -1.052620723813464e+308;
}
f1(-1.052620723813464e+308);
gc();
