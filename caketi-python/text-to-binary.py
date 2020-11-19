 

x = "caketi"
print(' '.join(format(x, 'b') for x in bytearray(x, 'utf-8'))) 
# use bytearray

print( ' '.join(format(ord(x), 'b') for x in x)
)
print(x.encode('utf-8'))