import { styled } from 'styled-components';

export const Lists = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);

    @supports (gap: 10px) { gap: 10px; }
    @supports (padding-inline-start: 0) {padding-inline-start: 0}
`