/* global describe, it */

import TBuffer from '@/t-buffer'

describe('test', () => {
  it('test', () => {
    let tBuffer = new TBuffer()
    for (let i = 0; i < 10; i++) {
      tBuffer.writeInt8(i, i)
    }
    tBuffer._alloc(11)
    console.info(tBuffer)
  })
})
