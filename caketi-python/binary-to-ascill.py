binary_message = "01000100 01101111 01101110 00100111 01110100 00100000 01100100 01100101 01110000 01101100 01101111 01111001 00100000 01101111 01101110 00100000 01000110 01110010 01101001 01100100 01100001 01111001 00100001"

def to_letter(binary):
    decimal = int(binary, 2)
    ascill_value = chr(decimal)
    return ascill_value

print( "".join( to_letter(binary) for binary in binary_message.split() ) )

#Dont deploy on Firday!

#text to binary
