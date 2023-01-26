import React, { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [{
    value: Currency.RUB,
    content: Currency.RUB,
},
{
    value: Currency.USD,
    content: Currency.USD,
},
{
    value: Currency.EUR,
    content: Currency.EUR,
},
];

export const CurrencySelect = memo(({
    className, value, onChange, readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите валюту')}
            value={value}
            options={options}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
