export const createRow = (row) => {
  console.log(row)
  return {
    type: 'CREATE_ROW',
    payload: row
  }
}