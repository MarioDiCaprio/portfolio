import {styled} from "@mui/material";

export const Context = styled('div')`
  width: 100%;
  padding-top: 20px;
  text-align: center;
`;

export const Title = styled('h2')`
  font-size: clamp(20px, 8vw, 3rem);
  font-weight: 800;
  margin-top: 0;
`;

export const CardWrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Card = styled('div')`
  width: 210px;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.04);
  border: 1px solid #E8E8EFFF;
  font-weight: 600;
  
  img {
    width: 90px;
    height: 90px;
  }
  
  @media (max-width: 490px) {
    width: 100%;
  }
`;