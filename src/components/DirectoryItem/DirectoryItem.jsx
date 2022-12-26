import { BackgroundImage, CategoryBodyContainer, DirectoryItemContainer } from './DirectoryItem.styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ imageUrl, title, route }) => {
    const navigate = useNavigate();
    return (
        <DirectoryItemContainer onClick={() => navigate(route)}>
            <BackgroundImage imageUrl={imageUrl} />
            <CategoryBodyContainer>
                <h2>{title}</h2>
                <p>Shop now</p>
            </CategoryBodyContainer>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
