export const codeOne = `//clock-card.modules.css

//why is this customisation not possible, let’s take a look at the code.

.clock-hands { 
     background-color: var(--global_color_primary-content) 
}

.minute-lines { 
     color: var(--global_color_primary-content) 
}

.hour-lines { 
     color: var(--global_color_primary-content) 
}

.card-text { 
     color: var(--global_color_primary-content) 
}

//light-theme.modules.css

: root { --global_color_primary-content: --token_color_dark-grey }

//by changing the global style for primary-content to red for our customisation - you’ll affect every css property pointing to that variable. The only way to do this with this current setup would be to override the style in clock-card.modules.css, and we can’t do that because it will break the theme setup.`;

export const codeTwo = `//light-theme.modules.css

//We can programmatically generate our shades using color-mix, here is an example for our button hover colour
 
:root { 
--alias_color_accent-85: color-mix(in rgb, var(--global_color_accent) 85% , var(--global_color_accent-mix) 15%);

--alias_color_accent-hover: var(--alias_color_accent-85);

--component_color_button-filled-hover: var(--alias_color_accent-hover);
}`;

export const codeThree = `//light-theme.modules.css
    type
    Props = {
        size: ‘s’ | ‘m’ | ‘l’;
        lineHeight: ‘s’ | ‘m’ | ‘l’;         
    }
    ;

    const Paragraph = ({
                           size = ‘m’,
    lineHeight =’l’,
    children,
    }:
    PropsWithChildren < Props >
    ) =>
    {
    ...

        <Paragraph size=’
        s’ lineHeight =’l’>
        Fusion
        Neue </Typography>

//I also want to mention the beauty of shorthand font styling 
            .paragraph - small
        {
            font: 16
            px
            120 %
            var (
            --global_typography_paragraph - font - family
        )
        }`;
