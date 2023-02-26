import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ArticleImageBlock } from 'enteties/Article/model/types/article';
import { AppText, TextAlign } from 'shared/ui/Text/AppText';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => (
    <div className={classNames('', {}, [className])}>
        <img src={block.src} className={cls.img} alt={block.title} />
        {block.title && (
            <AppText text={block.title} align={TextAlign.CENTER} />
        )}
    </div>
));
