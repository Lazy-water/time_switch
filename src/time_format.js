/**
 * 
 * 时间戳转化问指定时间格式 如 YY-MM-DD hh:mm:ss:md
 * @param { 时间戳 } time 
 * @param { 转化类型 } type 
 */

export const time_format = (time, type) => {
    if((typeof time !== 'number' && isNaN(time)) || time < 0 ) {
        console.error('[time_switch] time_format函数传入参数为不小于 0 的数字');
    } else if(!type) {
        console.error('[time_switch] 请填写要转化的格式')
    } else {
        time = String(time);
        if(time.length !== 13) {
            let str = '',
                num = 13 - time.length;
            for(let i = 0; i < num; i++) {
                str += '0';
            }
            time += str;
        }
        time = parseFloat(time)
        const date = new Date(time)
        const { Y, M, D, h, m, s, md } = {
            Y: date.getFullYear(),
            M: date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`,
            D: date.getDate(),
            h: date.getHours(),
            m: date.getMinutes(),
            s: date.getSeconds(),
            md: date.getMilliseconds()
        }
        type = type.replace(/YY/g, Y);
        type = type.replace(/MM/g, M);
        type = type.replace(/DD/g, D);
        type = type.replace(/hh/g, h);
        type = type.replace(/mm/g, m);
        type = type.replace(/ss/g, s);
        type = type.replace(/md/g, md);
        return type;
    }
}