import {Menu} from 'antd';

const Header = () => {
    const items = [
        { label: 'Design' },
        { label: 'Procurement' },
        { label: 'Services' },
        { label: 'Deposition' },
        {
          label: 'sub menu',
          children: [{ label: 'item 3' }],
        },
    ];
    return (
        <Menu items={items} mode="horizontal" />
    );
};

export default Header;