---
layout: project
type: project
image: images/sha1.png
title: Secure Hash Algorithm 1
permalink: projects/sha1
# All dates must be YYYY-MM-DD format!
date: 2019-05-01
labels:
  - Cyber Security
  - C
summary: The implementation of the cryptographic hash function.
---

For my ICS 212 Final Project, I implement the SHA-1 pseudocode using C.  SHA-1 is a cryptographic hash function which takes an input and produces a 160-bit hash value known as a message digest. SHA-1 was designed by the United States National Security Agency, and is a U.S. Federal Information Processing Standard.

After a few complicated cryptographic steps, the function will produce a distinct message digest. The message digest should be the same as the sample output. If there is a tiny mistake in one step, the result will be completely different from the expected value. Since the programming environment didn't contain a debugger, all the functions need test output.

Here's a part of my code:

```C
int addBitCountToLastBlock(unsigned int message[], unsigned int sizeOfFileInBytes, int indexOfTheLastIntegerInMessage, unsigned int blockCount) {
  unsigned int indexOfEndOfLastBlock = (blockCount * 16) - 1;  
  int i = 0;
  TEST puts("Adding bit count till last block.");
  for(i = indexOfTheLastIntegerInMessage + 1; i < indexOfEndOfLastBlock; i++){
    message[i] = 0x00000000;
    TEST printf("message[%d] = 0x%08X\n", i, message[i]);
  }
  message[i] = sizeOfFileInBytes * 8; // the last word is the size of File in Bits
  TEST printf("message[%d] = 0x%08X\n", i, message[i]);
  return indexOfEndOfLastBlock;
}

```

