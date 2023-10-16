const { getHistorySearchById, deleteSearch } = require('../repository/index')
// Lưu history search khi người dùng bấm vào trang cá nhân
async function getHistorySearch(req, res, next) {
  try {
    const { id } = req.params
    const searchHistory = await getHistorySearchById(id)
    res.json(searchHistory)
  } catch (error) {
    console.log(error)
    next(error)
  }
}
async function deleteSearchHistory(req, res, next) {
  try {
    const { id } = req.params
    // Xóa lịch sử tìm kiếm dựa trên id
    await deleteSearch(id)

    res.status(200).json({ message: 'Xóa lịch sử tìm kiếm thành công.' })
  } catch (error) {
    console.log(error)
    next(error)
  }
}
module.exports = { getHistorySearch, deleteSearchHistory }
