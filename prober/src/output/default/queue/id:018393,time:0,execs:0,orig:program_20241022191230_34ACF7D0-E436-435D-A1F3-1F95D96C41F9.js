class C1 {
    #e = 1518568775;
}
for (let i4 = 0, i5 = 127;
    i4 < i5;
    (() => {
        i5--;
        class C10 extends C1 {
        }
        new C10();
    })()) {
}
gc();
