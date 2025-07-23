str = "abc"
ba= str.encode()
print(type(ba))
print(ba.decode('utf-8', errors='ignore'))