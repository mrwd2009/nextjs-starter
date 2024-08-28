'use client';
import { useState } from 'react';
import { Button, Dropdown, Tooltip } from 'antd';
import Icon from '@ant-design/icons';
import { useTheme } from 'next-themes';
import Auto from '@/client/assets/images/theme-icon/os.svg';
import Sun from '@/client/assets/images/theme-icon/sun.svg';
import Moon from '@/client/assets/images/theme-icon/moon.svg';
import { DARK_THEME, LIGHT_THEME, SYSTEM_THEME } from './theme-constants';
import { useMounted } from '@/client/hooks';

const iconStyle = {
  fontSize: '14px',
};

const viewBox = '0 0 16 16';

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [listVisible, setListVisible] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const { isMounted } = useMounted();

  if (!isMounted) {
    return <Button size="small" type="text" loading />;
  }

  const iconMap: {
    [key: string]: React.ReactNode;
  } = {
    system: <Icon component={Auto} style={iconStyle} viewBox={viewBox} />,
    light: <Icon component={Sun} style={iconStyle} viewBox={viewBox} />,
    dark: <Icon component={Moon} style={iconStyle} viewBox={viewBox} />,
  };

  const overlay = {
    selectedKeys: [theme!],
    onClick: ({ key }: { key: string }) => {
      if (key === SYSTEM_THEME) {
        setTheme(SYSTEM_THEME);
        return;
      }
      if (key === LIGHT_THEME) {
        setTheme(LIGHT_THEME);
        return;
      }
      setTheme(DARK_THEME);
    },
    items: [
      {
        key: SYSTEM_THEME,
        icon: iconMap.system,
        label: 'Auto',
      },
      {
        key: LIGHT_THEME,
        icon: iconMap.light,
        label: 'Light',
      },
      {
        key: DARK_THEME,
        icon: iconMap.dark,
        label: 'Dark',
      },
    ],
  };

  return (
    <Dropdown
      trigger={['click']}
      menu={overlay}
      open={listVisible}
      onOpenChange={(open) => {
        setListVisible(open);
        if (!open) {
          setTooltipVisible(false);
        }
      }}
      placement="bottomRight"
    >
      <Tooltip
        title={`Theme: ${overlay.items.find((item) => item.key === theme)?.label}`}
        open={tooltipVisible && !listVisible}
        onOpenChange={setTooltipVisible}
      >
        <Button size="small" type="text" icon={iconMap[theme!]} />
      </Tooltip>
    </Dropdown>
  );
}
