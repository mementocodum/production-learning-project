import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppText } from 'shared/ui/Text/AppText';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <AppText title={block.title} className={cls.title} />
            )}
            {block.paragraphs.map((paragraph) => (
                <AppText key={paragraph} text={paragraph} className={cls.paragraph} />
            ))}
        </div>
    );
});
