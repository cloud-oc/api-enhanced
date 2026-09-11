const createOption = (query, crypto = '', checkToken = false) => {
  const defaultRandomCNIP = process.env.ENABLE_RANDOM_CN_IP !== 'false'

  return {
    crypto: query.crypto || crypto || '',
    cookie: query.cookie || process.env.NETEASE_COOKIE,
    ua: query.ua || '',
    proxy: query.proxy,
    realIP: query.realIP,
    randomCNIP:
      query.randomCNIP === undefined
        ? defaultRandomCNIP
        : ['true', true].includes(query.randomCNIP),
    e_r: query.e_r || undefined,
    domain: query.domain || '',
    checkToken: query.checkToken || checkToken,
    headers: query.headers || {},
    timeout: query.timeout || 0,
  }
}
module.exports = createOption
