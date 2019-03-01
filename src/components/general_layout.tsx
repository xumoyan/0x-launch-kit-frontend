import React from 'react';
import styled from 'styled-components';

import { themeBreakPoints } from '../util/theme';

import { StepsModalContainer } from './common/steps_modal/steps_modal';
import { Footer } from './common/footer';
import { Toolbar } from './common/toolbar';

const General = styled.div`
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: auto;
    padding: 10px;

    @media (min-width: ${themeBreakPoints.xl}) {
        flex-direction: row;
    }
`;

interface GeneralLayoutProps {
    children: React.ReactChildren;
}

export const GeneralLayout = (props: React.Props<any> | GeneralLayoutProps) => {
    const { children } = props;

    return (
        <General>
            <Toolbar />
            <Content>{children}</Content>
            <Footer />
            <StepsModalContainer />
        </General>
    );
};
