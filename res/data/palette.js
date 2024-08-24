echoLiveEditor.registerPalette([
    {
        meta: {
            name: 'material',
            title: 'Material Design',
            i18n: 'material.title'
        },
        colors: [
            { value: '#000000', title: 'Black', i18n: 'common.color.black' },
            { value: '#000000de', title: 'Black - Default', i18n: 'common.color.black', after: 'default' },
            { value: '#0000008a', title: 'Black - Light', i18n: 'common.color.black', after: 'light' },
            { value: '#00000052', title: 'Black - Lighter', i18n: 'common.color.black', after: 'lighter' },
            { value: '#00000012', title: 'Black - Lightest', i18n: 'common.color.black', after: 'lightest' },
            { value: '#ffffff', title: 'White', i18n: 'common.color.white', },
            { value: '#ffffffde', title: 'White - Default', i18n: 'common.color.white', after: 'default' },
            { value: '#ffffff8a', title: 'White - Light', i18n: 'common.color.white', after: 'light' },
            { value: '#ffffff52', title: 'White - Lighter', i18n: 'common.color.white', after: 'lighter' },
            { value: '#ffffff12', title: 'White - Lightest', i18n: 'common.color.white', after: 'lightest' },
            { value: '#e2e4e9', title: 'Gray', i18n: 'common.color.gray' },
            { value: '#e2e4e9d1', title: 'Gray - Default', i18n: 'common.color.gray', after: 'default' },
            { value: '#e2e4e98f', title: 'Gray - Light', i18n: 'common.color.gray', after: 'light' },
            { value: '#e2e4e952', title: 'Gray - Lighter', i18n: 'common.color.gray', after: 'lighter' },
            { value: '#e2e4e91f', title: 'Gray - Lightest', i18n: 'common.color.gray', after: 'lightest' },

            { type: 'group', value: 'Dark', i18n: 'common.after.deep' },
            { value: '#e53734', title: 'Red - Dark', i18n: 'common.color.red', after: 'deep' },
            { value: '#c3185d', title: 'Pink - Dark', i18n: 'common.color.pink', after: 'deep' },
            { value: '#8c24a8', title: 'Purple - Dark', i18n: 'common.color.purple', after: 'deep' },
            { value: '#673ab6', title: 'Deep Purple - Dark', i18n: 'common.color.deep_purple', after: 'deep' },
            { value: '#303fa1', title: 'Indigo - Dark', i18n: 'common.color.indigo', after: 'deep' },
            { value: '#1975d2', title: 'Blue - Dark', i18n: 'common.color.blue', after: 'deep' },
            { value: '#0287cf', title: 'Light Blue - Dark', i18n: 'common.color.light_blue', after: 'deep' },
            { value: '#0097a8', title: 'Cyan - Dark', i18n: 'common.color.cyan', after: 'deep' },
            { value: '#007a6c', title: 'Teal - Dark', i18n: 'common.color.teal', after: 'deep' },
            { value: '#398e3d', title: 'Green - Dark', i18n: 'common.color.green', after: 'deep' },
            { value: '#689f38', title: 'Light Green - Dark', i18n: 'common.color.light_green', after: 'deep' },
            { value: '#b0b52c', title: 'Lime - Dark', i18n: 'common.color.lime', after: 'deep' },
            { value: '#fbc02d', title: 'Yellow - Dark', i18n: 'common.color.yellow', after: 'deep' },
            { value: '#ffa200', title: 'Amber - Dark', i18n: 'common.color.amber', after: 'deep' },
            { value: '#fa8900', title: 'Orange - Dark', i18n: 'common.color.orange', after: 'deep' },
            { value: '#f4511f', title: 'Deep Orange - Dark', i18n: 'common.color.deep_orange', after: 'deep' },
            { value: '#5d4037', title: 'Brown - Dark', i18n: 'common.color.brown', after: 'deep' },
            { value: '#616161', title: 'Grey - Dark', i18n: 'common.color.gray', after: 'deep' },
            { value: '#455a63', title: 'Blue Grey - Dark', i18n: 'common.color.blue_gray', after: 'deep' },

            { type: 'group', value: 'Default', i18n: 'common.after.middle' },
            { value: '#ef5552', title: 'Red', i18n: 'common.color.red' },
            { value: '#e92063', title: 'Pink', i18n: 'common.color.pink' },
            { value: '#ab47bd', title: 'Purple', i18n: 'common.color.purple' },
            { value: '#7e56c2', title: 'Deep Purple', i18n: 'common.color.deep_purple' },
            { value: '#4051b5', title: 'Indigo', i18n: 'common.color.indigo' },
            { value: '#2094f3', title: 'Blue', i18n: 'common.color.blue' },
            { value: '#02a6f2', title: 'Light Blue', i18n: 'common.color.light_blue' },
            { value: '#00bdd6', title: 'Cyan', i18n: 'common.color.cyan' },
            { value: '#009485', title: 'Teal', i18n: 'common.color.teal' },
            { value: '#4cae4f', title: 'Green', i18n: 'common.color.green' },
            { value: '#8bc34b', title: 'Light Green', i18n: 'common.color.light_green' },
            { value: '#cbdc38', title: 'Lime', i18n: 'common.color.lime' },
            { value: '#ffec3d', title: 'Yellow', i18n: 'common.color.yellow' },
            { value: '#ffc105', title: 'Amber', i18n: 'common.color.amber' },
            { value: '#ffa724', title: 'Orange', i18n: 'common.color.orange' },
            { value: '#ff6e42', title: 'Deep Orange', i18n: 'common.color.deep_orange' },
            { value: '#795649', title: 'Brown', i18n: 'common.color.brown' },
            { value: '#757575', title: 'Grey', i18n: 'common.color.gray' },
            { value: '#546d78', title: 'Blue Grey', i18n: 'common.color.blue_gray' },

            { type: 'group', value: 'Light', i18n: 'common.after.light' },
            { value: '#e57171', title: 'Red - Light', i18n: 'common.color.red', after: 'light' },
            { value: '#ec417a', title: 'Pink - Light', i18n: 'common.color.pink', after: 'light' },
            { value: '#bb69c9', title: 'Purple - Light', i18n: 'common.color.purple', after: 'light' },
            { value: '#9574cd', title: 'Deep Purple - Light', i18n: 'common.color.deep_purple', after: 'light' },
            { value: '#5d6cc0', title: 'Indigo - Light', i18n: 'common.color.indigo', after: 'light' },
            { value: '#42a5f5', title: 'Blue - Light', i18n: 'common.color.blue', after: 'light' },
            { value: '#28b5f6', title: 'Light Blue - Light', i18n: 'common.color.light_blue', after: 'light' },
            { value: '#25c5da', title: 'Cyan - Light', i18n: 'common.color.cyan', after: 'light' },
            { value: '#26a699', title: 'Teal - Light', i18n: 'common.color.teal', after: 'light' },
            { value: '#68bb6c', title: 'Green - Light', i18n: 'common.color.green', after: 'light' },
            { value: '#9ccc66', title: 'Light Green - Light', i18n: 'common.color.light_green', after: 'light' },
            { value: '#d3e156', title: 'Lime - Light', i18n: 'common.color.lime', after: 'light' },
            { value: '#ffee57', title: 'Yellow - Light', i18n: 'common.color.yellow', after: 'light' },
            { value: '#ffc929', title: 'Amber - Light', i18n: 'common.color.amber', after: 'light' },
            { value: '#ffad33', title: 'Orange - Light', i18n: 'common.color.orange', after: 'light' },
            { value: '#ff8a66', title: 'Deep Orange - Light', i18n: 'common.color.deep_orange', after: 'light' },
            { value: '#8d6e62', title: 'Brown - Light', i18n: 'common.color.brown', after: 'light' },
            { value: '#9e9e9e', title: 'Grey - Light', i18n: 'common.color.gray', after: 'light' },
            { value: '#607c8a', title: 'Blue Grey - Light', i18n: 'common.color.blue_gray', after: 'light' }
        ]
    }, {
        meta: {
            name: 'tailwindcss',
            title: 'Tailwind CSS',
            i18n: 'tailwindcss.title'
        },
        colors: [
            { value: '#000000', title: 'Black', i18n: 'common.color.black' },
            { value: '#ffffff', title: 'White', i18n: 'common.color.white' },
            { value: '#64748b', title: 'Slate', i18n: 'tailwindcss.color.slate' },
            { value: '#6b7280', title: 'Gray', i18n: 'common.color.gray' },
            { value: '#71717a', title: 'Zinc', i18n: 'tailwindcss.color.zinc' },
            { value: '#737373', title: 'Neutral', i18n: 'tailwindcss.color.neutral' },
            { value: '#787170', title: 'Stone', i18n: 'tailwindcss.color.stone' },

            { type: 'group', value: 'Weight 500', i18n: 'tailwindcss.group.weight', i18n_var: { value: 500 } },
            { value: '#ef4444', title: 'Red 500', i18n: 'common.color.red', i18n_var: { value: 500 } },
            { value: '#f97316', title: 'Orange 500', i18n: 'common.color.orange', i18n_var: { value: 500 } },
            { value: '#f59e0b', title: 'Amber 500', i18n: 'common.color.amber', i18n_var: { value: 500 } },
            { value: '#eab308', title: 'Yellow 500', i18n: 'common.color.yellow', i18n_var: { value: 500 } },
            { value: '#84cc16', title: 'Lime 500', i18n: 'common.color.lime', i18n_var: { value: 500 } },
            { value: '#22c55e', title: 'Green 500', i18n: 'common.color.green', i18n_var: { value: 500 } },
            { value: '#10b981', title: 'Emerald 500', i18n: 'tailwindcss.color.emerald', i18n_var: { value: 500 } },
            { value: '#14b8a6', title: 'Teal 500', i18n: 'common.color.teal', i18n_var: { value: 500 } },
            { value: '#06b6d4', title: 'Cyan 500', i18n: 'common.color.cyan', i18n_var: { value: 500 } },
            { value: '#0ea5e9', title: 'Sky 500', i18n: 'common.color.sky', i18n_var: { value: 500 } },
            { value: '#3b82f6', title: 'Blue 500', i18n: 'common.color.blue', i18n_var: { value: 500 } },
            { value: '#6366f1', title: 'Indigo 500', i18n: 'common.color.indigo', i18n_var: { value: 500 } },
            { value: '#8b5cf6', title: 'Violet 500', i18n: 'common.color.violet', i18n_var: { value: 500 } },
            { value: '#a855f7', title: 'Purple 500', i18n: 'common.color.purple', i18n_var: { value: 500 } },
            { value: '#d945ef', title: 'Fuchsia 500', i18n: 'common.color.magenta', i18n_var: { value: 500 } },
            { value: '#ec4899', title: 'Pink 500', i18n: 'common.color.pink', i18n_var: { value: 500 } },
            { value: '#f43f5e', title: 'Rose 500', i18n: 'tailwindcss.color.rose', i18n_var: { value: 500 } },

            { type: 'group', value: 'Weight 700', i18n: 'tailwindcss.group.weight', i18n_var: { value: 700 } },
            { value: '#b91c1c', title: 'Red 700', i18n: 'common.color.red', i18n_var: { value: 700 } },
            { value: '#c2410c', title: 'Orange 700', i18n: 'common.color.orange', i18n_var: { value: 700 } },
            { value: '#b45309', title: 'Amber 700', i18n: 'common.color.amber', i18n_var: { value: 700 } },
            { value: '#a16007', title: 'Yellow 700', i18n: 'common.color.yellow', i18n_var: { value: 700 } },
            { value: '#4d7c0f', title: 'Lime 700', i18n: 'common.color.lime', i18n_var: { value: 700 } },
            { value: '#15803d', title: 'Green 700', i18n: 'common.color.green', i18n_var: { value: 700 } },
            { value: '#047857', title: 'Emerald 700', i18n: 'tailwindcss.color.emerald', i18n_var: { value: 700 } },
            { value: '#0f766e', title: 'Teal 700', i18n: 'common.color.teal', i18n_var: { value: 700 } },
            { value: '#0e7490', title: 'Cyan 700', i18n: 'common.color.cyan', i18n_var: { value: 700 } },
            { value: '#03719f', title: 'Sky 700', i18n: 'common.color.sky', i18n_var: { value: 700 } },
            { value: '#1d4ed8', title: 'Blue 700', i18n: 'common.color.blue', i18n_var: { value: 700 } },
            { value: '#4338ca', title: 'Indigo 700', i18n: 'common.color.indigo', i18n_var: { value: 700 } },
            { value: '#6d28d9', title: 'Violet 700', i18n: 'common.color.violet', i18n_var: { value: 700 } },
            { value: '#7e22ce', title: 'Purple 700', i18n: 'common.color.purple', i18n_var: { value: 700 } },
            { value: '#a21caf', title: 'Fuchsia 700', i18n: 'common.color.magenta', i18n_var: { value: 700 } },
            { value: '#be185d', title: 'Pink 700', i18n: 'common.color.pink', i18n_var: { value: 700 } },
            { value: '#be123c', title: 'Rose 700', i18n: 'tailwindcss.color.rose', i18n_var: { value: 700 } },

            { type: 'group', value: 'Weight 300', i18n: 'tailwindcss.group.weight', i18n_var: { value: 300 } },
            { value: '#fca5a5', title: 'Red 300', i18n: 'common.color.red', i18n_var: { value: 300 } },
            { value: '#fdba74', title: 'Orange 300', i18n: 'common.color.orange', i18n_var: { value: 300 } },
            { value: '#fcd34d', title: 'Amber 300', i18n: 'common.color.amber', i18n_var: { value: 300 } },
            { value: '#fde047', title: 'Yellow 300', i18n: 'common.color.yellow', i18n_var: { value: 300 } },
            { value: '#bee664', title: 'Lime 300', i18n: 'common.color.lime', i18n_var: { value: 300 } },
            { value: '#86efac', title: 'Green 300', i18n: 'common.color.green', i18n_var: { value: 300 } },
            { value: '#6ee7b7', title: 'Emerald 300', i18n: 'tailwindcss.color.emerald', i18n_var: { value: 300 } },
            { value: '#5eeaD4', title: 'Teal 300', i18n: 'common.color.teal', i18n_var: { value: 300 } },
            { value: '#67e8f9', title: 'Cyan 300', i18n: 'common.color.cyan', i18n_var: { value: 300 } },
            { value: '#7dd3fc', title: 'Sky 300', i18n: 'common.color.sky', i18n_var: { value: 300 } },
            { value: '#93c5fd', title: 'Blue 300', i18n: 'common.color.blue', i18n_var: { value: 300 } },
            { value: '#a5b4fc', title: 'Indigo 300', i18n: 'common.color.indigo', i18n_var: { value: 300 } },
            { value: '#c4b5fd', title: 'Violet 300', i18n: 'common.color.violet', i18n_var: { value: 300 } },
            { value: '#d8b4fe', title: 'Purple 300', i18n: 'common.color.purple', i18n_var: { value: 300 } },
            { value: '#f0abfc', title: 'Fuchsia 300', i18n: 'common.color.magenta', i18n_var: { value: 300 } },
            { value: '#f9a8d4', title: 'Pink 300', i18n: 'common.color.pink', i18n_var: { value: 300 } },
            { value: '#fda4af', title: 'Rose 300', i18n: 'tailwindcss.color.rose', i18n_var: { value: 300 } }
        ]
    }, {
        meta: {
            name: 'ant_design',
            title: 'Ant Design',
            i18n: 'ant_design.title'
        },
        colors: [
            { type: 'group', value: '功能色', i18n: 'common.group.functional_color' },
            { value: '#1890ff', title: 'Link', i18n: 'common.functional_color.link' },
            { value: '#25c41a', title: 'Success', i18n: 'common.functional_color.success' },
            { value: '#ffad14', title: 'Warning', i18n: 'common.functional_color.warning' },
            { value: '#ff4d4f', title: 'Error', i18n: 'common.functional_color.error' },
            { value: '#177ddc', title: 'Link - Dark', i18n: 'common.functional_color.link', after: 'deep' },
            { value: '#49aa19', title: 'Success - Dark', i18n: 'common.functional_color.success', after: 'deep' },
            { value: '#d89614', title: 'Warning - Dark', i18n: 'common.functional_color.warning', after: 'deep' },
            { value: '#a61d24', title: 'Error - Dark', i18n: 'common.functional_color.error', after: 'deep' },

            { type: 'group', value: '中性色', i18n: 'common.group.neutral_color' },
            { value: '#ffffff', title: 'Gray 1', i18n: 'common.color.white', i18n_var: { value: 1 } },
            { value: '#fafafa', title: 'Gray 2', i18n: 'common.color.white', i18n_var: { value: 2 } },
            { value: '#f5f5f5', title: 'Gray 3', i18n: 'common.color.light_gray', i18n_var: { value: 3 } },
            { value: '#f0f0f0', title: 'Gray 4', i18n: 'common.color.light_gray', i18n_var: { value: 4 } },
            { value: '#d9d9d9', title: 'Gray 5', i18n: 'common.color.gray', i18n_var: { value: 5 } },
            { value: '#bfbfbf', title: 'Gray 6', i18n: 'common.color.gray', i18n_var: { value: 6 } },
            { value: '#8c8c8c', title: 'Gray 7', i18n: 'common.color.gray', i18n_var: { value: 7 } },
            { value: '#595959', title: 'Gray 8', i18n: 'common.color.deep_gray', i18n_var: { value: 8 } },
            { value: '#434343', title: 'Gray 9', i18n: 'common.color.deep_gray', i18n_var: { value: 9 } },
            { value: '#262626', title: 'Gray 10', i18n: 'common.color.black', i18n_var: { value: 10 } },
            { value: '#1f1f1f', title: 'Gray 11', i18n: 'common.color.black', i18n_var: { value: 11 } },
            { value: '#141414', title: 'Gray 12', i18n: 'common.color.black', i18n_var: { value: 12 } },
            { value: '#000000', title: 'Gray 13', i18n: 'common.color.black', i18n_var: { value: 13 } },

            { type: 'group', value: 'Dust Red / 薄暮', i18n: 'ant_design.group.red' },
            { value: '#fff1f0', title: 'Red 1', i18n: 'ant_design.color.red', i18n_var: { value: 1 } },
            { value: '#ffccc7', title: 'Red 2', i18n: 'ant_design.color.red', i18n_var: { value: 2 } },
            { value: '#ffa39e', title: 'Red 3', i18n: 'ant_design.color.red', i18n_var: { value: 3 } },
            { value: '#ff7875', title: 'Red 4', i18n: 'ant_design.color.red', i18n_var: { value: 4 } },
            { value: '#ff4d4f', title: 'Red 5', i18n: 'ant_design.color.red', i18n_var: { value: 5 } },
            { value: '#f5222d', title: 'Red 6', i18n: 'ant_design.color.red', i18n_var: { value: 6 } },
            { value: '#cf1322', title: 'Red 7', i18n: 'ant_design.color.red', i18n_var: { value: 7 } },
            { value: '#a8071a', title: 'Red 8', i18n: 'ant_design.color.red', i18n_var: { value: 8 } },
            { value: '#820014', title: 'Red 9', i18n: 'ant_design.color.red', i18n_var: { value: 9 } },
            { value: '#5c0011', title: 'Red 10', i18n: 'ant_design.color.red', i18n_var: { value: 10 } },

            { type: 'group', value: 'Volcano / 火山', i18n: 'ant_design.group.volcano' },
            { value: '#fff2e8', title: 'Volcano 1', i18n: 'ant_design.color.volcano', i18n_var: { value: 1 } },
            { value: '#ffd8bf', title: 'Volcano 2', i18n: 'ant_design.color.volcano', i18n_var: { value: 2 } },
            { value: '#ffbb96', title: 'Volcano 3', i18n: 'ant_design.color.volcano', i18n_var: { value: 3 } },
            { value: '#ff9c6e', title: 'Volcano 4', i18n: 'ant_design.color.volcano', i18n_var: { value: 4 } },
            { value: '#ff7a45', title: 'Volcano 5', i18n: 'ant_design.color.volcano', i18n_var: { value: 5 } },
            { value: '#fa541c', title: 'Volcano 6', i18n: 'ant_design.color.volcano', i18n_var: { value: 6 } },
            { value: '#d4380d', title: 'Volcano 7', i18n: 'ant_design.color.volcano', i18n_var: { value: 7 } },
            { value: '#ad2102', title: 'Volcano 8', i18n: 'ant_design.color.volcano', i18n_var: { value: 8 } },
            { value: '#871400', title: 'Volcano 9', i18n: 'ant_design.color.volcano', i18n_var: { value: 9 } },
            { value: '#610b00', title: 'Volcano 10', i18n: 'ant_design.color.volcano', i18n_var: { value: 10 } },

            { type: 'group', value: 'Sunset Orange / 日暮', i18n: 'ant_design.group.orange' },
            { value: '#fff7e6', title: 'Orange 1', i18n: 'ant_design.color.orange', i18n_var: { value: 1 } },
            { value: '#ffe7ba', title: 'Orange 2', i18n: 'ant_design.color.orange', i18n_var: { value: 2 } },
            { value: '#ffd591', title: 'Orange 3', i18n: 'ant_design.color.orange', i18n_var: { value: 3 } },
            { value: '#ffc069', title: 'Orange 4', i18n: 'ant_design.color.orange', i18n_var: { value: 4 } },
            { value: '#ffa940', title: 'Orange 5', i18n: 'ant_design.color.orange', i18n_var: { value: 5 } },
            { value: '#fa8c16', title: 'Orange 6', i18n: 'ant_design.color.orange', i18n_var: { value: 6 } },
            { value: '#d46b08', title: 'Orange 7', i18n: 'ant_design.color.orange', i18n_var: { value: 7 } },
            { value: '#ad4e00', title: 'Orange 8', i18n: 'ant_design.color.orange', i18n_var: { value: 8 } },
            { value: '#873800', title: 'Orange 9', i18n: 'ant_design.color.orange', i18n_var: { value: 9 } },
            { value: '#612500', title: 'Orange 10', i18n: 'ant_design.color.orange', i18n_var: { value: 10 } },

            { type: 'group', value: 'Calendula Gold / 金盏花', i18n: 'ant_design.group.gold' },
            { value: '#fffbe6', title: 'Gold 1', i18n: 'ant_design.color.gold', i18n_var: { value: 1 } },
            { value: '#fff1b8', title: 'Gold 2', i18n: 'ant_design.color.gold', i18n_var: { value: 2 } },
            { value: '#ffe58f', title: 'Gold 3', i18n: 'ant_design.color.gold', i18n_var: { value: 3 } },
            { value: '#ffd666', title: 'Gold 4', i18n: 'ant_design.color.gold', i18n_var: { value: 4 } },
            { value: '#ffc53d', title: 'Gold 5', i18n: 'ant_design.color.gold', i18n_var: { value: 5 } },
            { value: '#faad14', title: 'Gold 6', i18n: 'ant_design.color.gold', i18n_var: { value: 6 } },
            { value: '#d48806', title: 'Gold 7', i18n: 'ant_design.color.gold', i18n_var: { value: 7 } },
            { value: '#ad6800', title: 'Gold 8', i18n: 'ant_design.color.gold', i18n_var: { value: 8 } },
            { value: '#874d00', title: 'Gold 9', i18n: 'ant_design.color.gold', i18n_var: { value: 9 } },
            { value: '#613400', title: 'Gold 10', i18n: 'ant_design.color.gold', i18n_var: { value: 10 } },

            { type: 'group', value: 'Sunrise Yellow / 日出', i18n: 'ant_design.group.yellow' },
            { value: '#feffe6', title: 'Yellow 1', i18n: 'ant_design.color.yellow', i18n_var: { value: 1 } },
            { value: '#ffffb8', title: 'Yellow 2', i18n: 'ant_design.color.yellow', i18n_var: { value: 2 } },
            { value: '#fffb8f', title: 'Yellow 3', i18n: 'ant_design.color.yellow', i18n_var: { value: 3 } },
            { value: '#fff566', title: 'Yellow 4', i18n: 'ant_design.color.yellow', i18n_var: { value: 4 } },
            { value: '#ffec3d', title: 'Yellow 5', i18n: 'ant_design.color.yellow', i18n_var: { value: 5 } },
            { value: '#fadb14', title: 'Yellow 6', i18n: 'ant_design.color.yellow', i18n_var: { value: 6 } },
            { value: '#d4b106', title: 'Yellow 7', i18n: 'ant_design.color.yellow', i18n_var: { value: 7 } },
            { value: '#ad8b00', title: 'Yellow 8', i18n: 'ant_design.color.yellow', i18n_var: { value: 8 } },
            { value: '#876800', title: 'Yellow 9', i18n: 'ant_design.color.yellow', i18n_var: { value: 9 } },
            { value: '#614700', title: 'Yellow 10', i18n: 'ant_design.color.yellow', i18n_var: { value: 10 } },

            { type: 'group', value: 'Lime / 青柠', i18n: 'ant_design.group.lime' },
            { value: '#fcffe6', title: 'Lime 1', i18n: 'ant_design.color.lime', i18n_var: { value: 1 } },
            { value: '#f4ffb8', title: 'Lime 2', i18n: 'ant_design.color.lime', i18n_var: { value: 2 } },
            { value: '#eaff8f', title: 'Lime 3', i18n: 'ant_design.color.lime', i18n_var: { value: 3 } },
            { value: '#d3f261', title: 'Lime 4', i18n: 'ant_design.color.lime', i18n_var: { value: 4 } },
            { value: '#bae637', title: 'Lime 5', i18n: 'ant_design.color.lime', i18n_var: { value: 5 } },
            { value: '#a0d911', title: 'Lime 6', i18n: 'ant_design.color.lime', i18n_var: { value: 6 } },
            { value: '#7cb305', title: 'Lime 7', i18n: 'ant_design.color.lime', i18n_var: { value: 7 } },
            { value: '#5b8c00', title: 'Lime 8', i18n: 'ant_design.color.lime', i18n_var: { value: 8 } },
            { value: '#3f6600', title: 'Lime 9', i18n: 'ant_design.color.lime', i18n_var: { value: 9 } },
            { value: '#254000', title: 'Lime 10', i18n: 'ant_design.color.lime', i18n_var: { value: 10 } },

            { type: 'group', value: 'Polar Green / 极光绿', i18n: 'ant_design.group.green' },
            { value: '#f6ffed', title: 'Green 1', i18n: 'ant_design.color.green', i18n_var: { value: 1 } },
            { value: '#d9f7be', title: 'Green 2', i18n: 'ant_design.color.green', i18n_var: { value: 2 } },
            { value: '#b7eb8f', title: 'Green 3', i18n: 'ant_design.color.green', i18n_var: { value: 3 } },
            { value: '#95de64', title: 'Green 4', i18n: 'ant_design.color.green', i18n_var: { value: 4 } },
            { value: '#73d13d', title: 'Green 5', i18n: 'ant_design.color.green', i18n_var: { value: 5 } },
            { value: '#52c41a', title: 'Green 6', i18n: 'ant_design.color.green', i18n_var: { value: 6 } },
            { value: '#389e0d', title: 'Green 7', i18n: 'ant_design.color.green', i18n_var: { value: 7 } },
            { value: '#237804', title: 'Green 8', i18n: 'ant_design.color.green', i18n_var: { value: 8 } },
            { value: '#135200', title: 'Green 9', i18n: 'ant_design.color.green', i18n_var: { value: 9 } },
            { value: '#092b00', title: 'Green 10', i18n: 'ant_design.color.green', i18n_var: { value: 10 } },

            { type: 'group', value: 'Cyan / 明青', i18n: 'ant_design.group.cyan' },
            { value: '#e6fffb', title: 'Cyan 1', i18n: 'ant_design.color.cyan', i18n_var: { value: 1 } },
            { value: '#b5f5ec', title: 'Cyan 2', i18n: 'ant_design.color.cyan', i18n_var: { value: 2 } },
            { value: '#87e8de', title: 'Cyan 3', i18n: 'ant_design.color.cyan', i18n_var: { value: 3 } },
            { value: '#5cdbd3', title: 'Cyan 4', i18n: 'ant_design.color.cyan', i18n_var: { value: 4 } },
            { value: '#36cfc9', title: 'Cyan 5', i18n: 'ant_design.color.cyan', i18n_var: { value: 5 } },
            { value: '#13c2c2', title: 'Cyan 6', i18n: 'ant_design.color.cyan', i18n_var: { value: 6 } },
            { value: '#08979c', title: 'Cyan 7', i18n: 'ant_design.color.cyan', i18n_var: { value: 7 } },
            { value: '#006d75', title: 'Cyan 8', i18n: 'ant_design.color.cyan', i18n_var: { value: 8 } },
            { value: '#00474f', title: 'Cyan 9', i18n: 'ant_design.color.cyan', i18n_var: { value: 9 } },
            { value: '#002329', title: 'Cyan 10', i18n: 'ant_design.color.cyan', i18n_var: { value: 10 } },

            { type: 'group', value: 'Daybreak Blue / 拂晓蓝', i18n: 'ant_design.group.blue' },
            { value: '#e6f4ff', title: 'Blue 1', i18n: 'ant_design.color.blue', i18n_var: { value: 1 } },
            { value: '#bae0ff', title: 'Blue 2', i18n: 'ant_design.color.blue', i18n_var: { value: 2 } },
            { value: '#91caff', title: 'Blue 3', i18n: 'ant_design.color.blue', i18n_var: { value: 3 } },
            { value: '#69b1ff', title: 'Blue 4', i18n: 'ant_design.color.blue', i18n_var: { value: 4 } },
            { value: '#4096ff', title: 'Blue 5', i18n: 'ant_design.color.blue', i18n_var: { value: 5 } },
            { value: '#1677ff', title: 'Blue 6', i18n: 'ant_design.color.blue', i18n_var: { value: 6 } },
            { value: '#0958d9', title: 'Blue 7', i18n: 'ant_design.color.blue', i18n_var: { value: 7 } },
            { value: '#003eb3', title: 'Blue 8', i18n: 'ant_design.color.blue', i18n_var: { value: 8 } },
            { value: '#002c8c', title: 'Blue 9', i18n: 'ant_design.color.blue', i18n_var: { value: 9 } },
            { value: '#001d66', title: 'Blue 10', i18n: 'ant_design.color.blue', i18n_var: { value: 10 } },

            { type: 'group', value: 'Geek Blue / 极客蓝', i18n: 'ant_design.group.geek_blue' },
            { value: '#f0f5ff', title: 'Geek Blue 1', i18n: 'ant_design.color.geek_blue', i18n_var: { value: 1 } },
            { value: '#d6e4ff', title: 'Geek Blue 2', i18n: 'ant_design.color.geek_blue', i18n_var: { value: 2 } },
            { value: '#adc6ff', title: 'Geek Blue 3', i18n: 'ant_design.color.geek_blue', i18n_var: { value: 3 } },
            { value: '#85a5ff', title: 'Geek Blue 4', i18n: 'ant_design.color.geek_blue', i18n_var: { value: 4 } },
            { value: '#597ef7', title: 'Geek Blue 5', i18n: 'ant_design.color.geek_blue', i18n_var: { value: 5 } },
            { value: '#2f54eb', title: 'Geek Blue 6', i18n: 'ant_design.color.geek_blue', i18n_var: { value: 6 } },
            { value: '#1d39c4', title: 'Geek Blue 7', i18n: 'ant_design.color.geek_blue', i18n_var: { value: 7 } },
            { value: '#10239e', title: 'Geek Blue 8', i18n: 'ant_design.color.geek_blue', i18n_var: { value: 8 } },
            { value: '#061178', title: 'Geek Blue 9', i18n: 'ant_design.color.geek_blue', i18n_var: { value: 9 } },
            { value: '#030852', title: 'Geek Blue 10', i18n: 'ant_design.color.geek_blue', i18n_var: { value: 10 } },

            { type: 'group', value: 'Golden Purple / 酱紫', i18n: 'ant_design.group.purple' },
            { value: '#f9f0ff', title: 'Purple 1', i18n: 'ant_design.color.purple', i18n_var: { value: 1 } },
            { value: '#efdbff', title: 'Purple 2', i18n: 'ant_design.color.purple', i18n_var: { value: 2 } },
            { value: '#d3adf7', title: 'Purple 3', i18n: 'ant_design.color.purple', i18n_var: { value: 3 } },
            { value: '#b37feb', title: 'Purple 4', i18n: 'ant_design.color.purple', i18n_var: { value: 4 } },
            { value: '#9254de', title: 'Purple 5', i18n: 'ant_design.color.purple', i18n_var: { value: 5 } },
            { value: '#722ed1', title: 'Purple 6', i18n: 'ant_design.color.purple', i18n_var: { value: 6 } },
            { value: '#531dab', title: 'Purple 7', i18n: 'ant_design.color.purple', i18n_var: { value: 7 } },
            { value: '#391085', title: 'Purple 8', i18n: 'ant_design.color.purple', i18n_var: { value: 8 } },
            { value: '#22075e', title: 'Purple 9', i18n: 'ant_design.color.purple', i18n_var: { value: 9 } },
            { value: '#120338', title: 'Purple 10', i18n: 'ant_design.color.purple', i18n_var: { value: 10 } },

            { type: 'group', value: 'Magenta / 法式洋红', i18n: 'ant_design.group.magenta' },
            { value: '#fff0f6', title: 'Magenta 1', i18n: 'ant_design.color.magenta', i18n_var: { value: 1 } },
            { value: '#ffd6e7', title: 'Magenta 2', i18n: 'ant_design.color.magenta', i18n_var: { value: 2 } },
            { value: '#ffadd2', title: 'Magenta 3', i18n: 'ant_design.color.magenta', i18n_var: { value: 3 } },
            { value: '#ff85c0', title: 'Magenta 4', i18n: 'ant_design.color.magenta', i18n_var: { value: 4 } },
            { value: '#f759ab', title: 'Magenta 5', i18n: 'ant_design.color.magenta', i18n_var: { value: 5 } },
            { value: '#eb2f96', title: 'Magenta 6', i18n: 'ant_design.color.magenta', i18n_var: { value: 6 } },
            { value: '#c41d7f', title: 'Magenta 7', i18n: 'ant_design.color.magenta', i18n_var: { value: 7 } },
            { value: '#9e1068', title: 'Magenta 8', i18n: 'ant_design.color.magenta', i18n_var: { value: 8 } },
            { value: '#780650', title: 'Magenta 9', i18n: 'ant_design.color.magenta', i18n_var: { value: 9 } },
            { value: '#520339', title: 'Magenta 10', i18n: 'ant_design.color.magenta', i18n_var: { value: 10 } },
        ]
    }, {
        meta: {
            name: 'minecraft',
            title: 'Minecraft',
            i18n: 'minecraft.title'
        },
        colors: [
            { value: '#000000', title: 'Black', i18n: 'common.color.black' },
            { value: '#0000aa', title: 'Dark Blue', i18n: 'common.color.deep_blue' },
            { value: '#00aa00', title: 'Dark Green', i18n: 'common.color.deep_green' },
            { value: '#00aaaa', title: 'Dark Aqua', i18n: 'common.color.deep_aqua' },
            { value: '#aa0000', title: 'Dark Red', i18n: 'common.color.deep_red' },
            { value: '#aa00aa', title: 'Dark Purple', i18n: 'common.color.deep_purple' },
            { value: '#ffaa00', title: 'Gold', i18n: 'common.color.gold' },
            { value: '#aaaaaa', title: 'Gray', i18n: 'common.color.gray' },
            { value: '#555555', title: 'Dark Gray', i18n: 'common.color.deep_gray' },
            { value: '#5555ff', title: 'Blue', i18n: 'common.color.blue' },
            { value: '#55ff55', title: 'Green', i18n: 'common.color.green' },
            { value: '#55ffff', title: 'Aqua', i18n: 'common.color.aqua' },
            { value: '#ff5555', title: 'Red', i18n: 'common.color.red' },
            { value: '#ff55ff', title: 'Light Purple', i18n: 'common.color.light_purple' },
            { value: '#ffff55', title: 'Yellow', i18n: 'common.color.yellow' },
            { value: '#ffffff', title: 'White', i18n: 'common.color.white' },
        ]
    }
]);