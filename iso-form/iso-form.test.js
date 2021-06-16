import { isoForm, positions } from "./iso-form";

describe('iso form', () => {
  it('should', () => {
    const expected = [ [ 'add', 'egg', 'gaa', 'ebb' ], [ 'mom', 'dad' ], [ 'sad' ] ]

    expect(isoForm(['add', 'mom', 'sad', 'dad', 'egg', 'gaa', 'ebb'])).toStrictEqual(expected)
  })
})

describe('character positions', () => {
  it('should work for add', () => {
    expect(positions("add")).toEqual([[0],[1,2]])
  })
  it('should work for egg', () => {
    expect(positions("egg")).toEqual([[0],[1,2]])
  })
  it('should work for dad', () => {
    expect(positions("dad")).toEqual([[0,2], [1]])
  })
  it('should work for gaa', () => {
    expect(positions("gaa")).toEqual([[0],[1,2]])
  })
})
