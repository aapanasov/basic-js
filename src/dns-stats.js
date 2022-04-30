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
  const flat = domains.map(dns => dns.split('.')).flat()
  const stat = {}
  for (let chunk of flat) {
    stat[chunk] ? stat[chunk]++ : stat[chunk] = 1


  }
  return stat
}

const domains = [
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
]

console.log(getDNSStats(domains))

module.exports = {
  getDNSStats
};
