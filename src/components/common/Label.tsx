import { HTMLAttributes, ReactElement } from "react";
import styled from "styled-components";
import { StyleProps } from "type";

type LabelType = "square";

interface LabelProps extends StyleProps, HTMLAttributes<HTMLLabelElement> {
  color: string;
  type: LabelType;
}

const Label = (props: LabelProps): ReactElement => {
  return props.type === "square" ? (
    <LabelSqaureStyle {...props}>{props.children}</LabelSqaureStyle>
  ) : (
    <LabelStyle {...props}>{props.children}</LabelStyle>
  );
};

const LabelStyle = styled.span`
  display: inline-block;
`;

const LabelSqaureStyle = styled.span<LabelProps>`
  display: inline-block;
  background: ${({ color }) => color};
  width: 16px;
  height: 16px;
  border-radius: 4px;
  ${({ styles }) => styles && styles};
`;

export default Label;
