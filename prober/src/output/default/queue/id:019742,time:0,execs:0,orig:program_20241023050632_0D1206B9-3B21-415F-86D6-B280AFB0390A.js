for (let v1 = 0; v1 < 5; v1++) {
    const v2 = Int32Array.bind();
    v2.bind(v1, v2.of()).from(v1);
}
gc();
