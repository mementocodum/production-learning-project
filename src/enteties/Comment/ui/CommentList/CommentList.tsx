import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppText } from 'shared/ui/Text/AppText';
import { useTranslation } from 'react-i18next';
import { CommentCard } from 'enteties/Comment';
import { Comment } from '../../model/types/comment';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean
}

export const CommentList = (props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard key={comment.id} className={cls.comment} comment={comment} isLoading={isLoading} />))
                : <AppText text={t('Комментарии отсутствуют')} />}
        </div>
    );
};
