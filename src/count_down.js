/**
 * 
 * 倒计时
 * @param { 倒计时时间 } time
 * 
 */

export const count_down = time => {
    if((typeof time !== 'number' && isNaN(time)) || time < 0 ) {
        console.error('[time_switch] count_down函数传入参数为不小于 0 的数字');
    } else {
        let { d, h, m, s, md } = {
            d: parseInt(time / (24 * 60 * 60)),
            h: parseInt(time / (60 * 60) % 24),
            m: parseInt(time / 60 % 60),
            s: parseInt(time % 60),
            md: parseInt(time % 60)
        }
        return [d, h, m, s, md]
    }
}