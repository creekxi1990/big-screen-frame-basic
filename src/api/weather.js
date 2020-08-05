import request from '@/common/js/request'
export function getWeather (data) {
  return request({
    url: 'https://free-api.heweather.net/s6/weather/now',
    method: 'post',
    data: data,
    dataType: 'json'
  })
}
