class TBuffer {
  _alloc (size) {
    if (!this._ab) {
      this._ab = new ArrayBuffer(size)
      this._dv = new DataView(this._ab)
      this._byteLength = size
    }
    if (this._ab.byteLength < size) {
      let byteLength = Math.max(
        size,
        Math.min(512, this._ab.byteLength * 2)
      )
      console.info('expand to', byteLength)
      let uint8Array = new Uint8Array(byteLength)
      uint8Array.set(new Uint8Array(this._ab))
      this._ab = uint8Array.buffer
      this._dv = new DataView(this._ab)
      this._byteLength = size
    }
  }
  get byteLength () {
    return this._byteLength
  }
  readDoubleBE (offset) {
  }
  readDoubleLE (offset) {
  }
  readFloatBE (offset) {
  }
  readFloatLE (offset) {
  }
  readInt8 (offset) {
  }
  readInt16BE (offset) {
  }
  readInt16LE (offset) {
  }
  readInt32BE (offset) {
  }
  readInt32LE (offset) {
  }
  readInt64LE (offset) {
  }
  readInt64BE (offset) {
  }
  readString (offset, length, encoding) {
  }
  writeDoubleBE (value, offset) {
  }
  writeDoubleLE (value, offset) {
  }
  writeFloatBE (value, offset) {
  }
  writeFloatLE (value, offset) {
  }
  writeInt8 (value, offset) {
    this._alloc(offset + 1)
    this._dv.setInt8(offset, value)
  }
  writeInt16BE (value, offset) {
  }
  writeInt16LE (value, offset) {
  }
  writeInt32BE (value, offset) {
  }
  writeInt32LE (value, offset) {
  }
  writeInt64BE (value, offset) {
  }
  writeInt64LE (value, offset) {
  }
  writeString (value, offset, length, encoding) {
  }
}

export default TBuffer
