import styled from "styled-components";

export const Text = styled.p`
  font-size: 24px;
`
export const TextBody = styled(Text)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 5px 25px 0;
  width: 900px;
  color: rgba(0, 0, 0, 0.6);
`
export const TextTitle = styled(Text)`
  padding-left: 10px;
  color: rgb(0, 0, 0);
`
