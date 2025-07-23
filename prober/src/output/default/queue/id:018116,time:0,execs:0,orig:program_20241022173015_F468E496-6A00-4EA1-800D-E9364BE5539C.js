function f1() {
    return Date;
}
f1.toString = Date;
/(?:a+)+Dpk(?:a*)+/iu.test(f1);
gc();
