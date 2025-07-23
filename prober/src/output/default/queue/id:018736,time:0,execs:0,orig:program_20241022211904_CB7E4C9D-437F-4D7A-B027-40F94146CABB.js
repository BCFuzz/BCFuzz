for (let i4 = 0, i5 = 10;
    5 < i5;
    (() => {
        i5--;
        const v10 = /[\cz](?<a>.)\k<a>/mv;
        v10.toString = Date;
        v10.test(v10);
    })()) {
}
gc();
