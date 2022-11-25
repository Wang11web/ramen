module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ramen/' // ramen 為 repo 名稱
    : '/'
}