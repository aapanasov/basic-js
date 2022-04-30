const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dns = domains.map(d => d.split('.').reverse())
  const stat = {}

  for (let domain of dns) {
    for (let i = 0; i < domain.length; i++) {
      const subDomain = '.' + domain.slice(0, i + 1).join('.')
      stat[subDomain] ? stat[subDomain]++ : stat[subDomain] = 1
    }
  }

  return stat
}


module.exports = {
  getDNSStats
};
