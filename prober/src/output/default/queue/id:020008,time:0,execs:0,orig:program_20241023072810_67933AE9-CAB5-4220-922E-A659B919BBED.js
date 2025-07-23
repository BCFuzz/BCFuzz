for (let i4 = 0, i5 = 10;
    i5--, i4 < i5;
    (() => {
        const v10 = ("string").__proto__;
        v10.a = "o";
        let {...v11} = v10;
    })()) {
}
gc();
