import styled from "styled-components";

export default styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    
    @media screen and (max-width:857px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width:600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;