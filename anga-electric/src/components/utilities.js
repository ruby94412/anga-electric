import {Typography} from 'antd';

export const getVerticalAlginText = () => {
    return (
        <span>点<br></br>击<br></br>放<br></br>大<br></br>图<br></br>片</span>
    )
};

const getSortedArray = s => {
    let i = 0;
    const rst = [];
    let cur = '';
    while (i < s.length) {
        if (!Number.isInteger(Number.parseInt(s.charAt(i)))) {
            cur += s.substring(i, ++i);
        }
        else {
            if (cur) {
                rst.push({
                    text: cur,
                    isNumber: false,
                });
                cur = '';
            }
            while(Number.isInteger(Number.parseInt(s.charAt(i))) && i < s.length){
                cur += s.substring(i, ++i);
            }
            rst.push({
                text: cur,
                isNumber: true,
            });
            cur = '';
        }
    }
    if (cur) {
        rst.push({
            text: cur,
            isNumber: false,
        });
    }
    return rst;
};

export const getHighlightedDataDisplay = s => {
    const arr = getSortedArray(s);
    return (
        <>
            {
                arr.map((item, index) => (
                    <Typography.Text
                        key={index}
                        className={item.isNumber ? 'numberText' : 'normalText'}
                        style={{color: 'white'}}
                    >
                            {item.text}
                    </Typography.Text>
                ))
            }
        </>
    );
};