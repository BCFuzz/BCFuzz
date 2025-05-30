import scipy.stats

fuzzilli = [581, 584, 584, 582, 583]
bcfuzz_fuzzilli = [592, 593, 593, 593, 592]
die = [570, 570, 570, 570, 569]
bcfuzz_die = [596, 595, 596, 595, 597]



print("fuzzilli:")
print(round(sum(fuzzilli)/len(fuzzilli), 2))
print("")

print("bcfuzz_fuzzilli:")
print(round(sum(bcfuzz_fuzzilli)/len(bcfuzz_fuzzilli), 2))
print("")

print("die:")
print(round(sum(die)/len(die), 2))
print("")

print("bcfuzz_die:")
print(round(sum(bcfuzz_die)/len(bcfuzz_die), 2))
print("")

print("=============p-value==============")
print("fuzzilli:")
print(scipy.stats.mannwhitneyu(fuzzilli, bcfuzz_fuzzilli, False,'less'))
print("")


print("die:")
print(scipy.stats.mannwhitneyu(die, bcfuzz_die, False,'less'))
print("")