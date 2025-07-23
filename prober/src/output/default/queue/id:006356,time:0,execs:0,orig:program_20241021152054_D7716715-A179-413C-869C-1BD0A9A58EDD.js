class C1 {
    #e = 1518568775;
}
new C1();
new C1();
for (let i6 = 0, i7 = 10;
    i6 < i7;
    (() => {
        i7--;
        class C12 extends C1 {
        }
        new C12();
    })()) {
}
gc();
