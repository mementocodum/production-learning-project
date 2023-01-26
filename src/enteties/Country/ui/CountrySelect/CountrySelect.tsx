import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [{
    value: Country.Georgia,
    content: Country.Georgia,
},
{
    value: Country.Russia,
    content: Country.Russia,
},
{
    value: Country.Belarus,
    content: Country.Belarus,
},
{
    value: Country.Kazakhstan,
    content: Country.Kazakhstan,
},
{
    value: Country.Georgia,
    content: Country.Georgia,
},
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            value={value}
            options={options}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
